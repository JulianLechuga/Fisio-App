import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { generate_exam_model } from "../store/actions";
import styles from "./css/drill.module.css";

export default function DrillQuestions() {
  const stateQuestions = useSelector((state) => state.examModeQuestions);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const category = location.pathname.split("/")[2];
  const [currentPage, setCurrentPage] = useState(0);
  const [amount, setAmount] = useState(40); // Limite a 40 preguntas hardcodeado
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [isAttemptFinished, setIsAttemptFinished] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (category === "fisio" || category === "micro" || category === "farmaco" || category === "microvirus" || category === "microfungi" || category === "microbacterium") {
      setAmount(40);
      dispatch(generate_exam_model(category, amount));
    }
  }, [dispatch, category, amount]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (totalAnswered > 0) {
        const message = "Tienes respuestas seleccionadas que se perderán si cambias de página.";
        event.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [totalAnswered]);

  useEffect(() => {
    let unblock;

    if (location.pathname.includes("drill")) {
      unblock = history.block((location) => {
        if (totalAnswered > 0) {
          return "Tienes respuestas seleccionadas que se perderán si cambias de página.";
        }
      });
    }

    return () => {
      if (unblock) {
        unblock();
      }
    };
  }, [history, location.pathname, totalAnswered]);

  useEffect(() => {
    const finishAttempt = () => {
      setIsAttemptFinished(true);
      const correctAnswers = Object.keys(selectedAnswers).reduce((acc, key) => {
        if (selectedAnswers[key] === stateQuestions[key].correct) {
          return acc + 1;
        }
        return acc;
      }, 0);
      setScore(correctAnswers);
    };

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          finishAttempt();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedAnswers, stateQuestions]);

  const handleAnswer = (questionIndex, answer) => {
    if (isAttemptFinished) return;
    const newSelectedAnswers = { ...selectedAnswers, [questionIndex]: answer };
    setSelectedAnswers(newSelectedAnswers);

    if (!selectedAnswers[questionIndex]) {
      setTotalAnswered(totalAnswered + 1);
    }
  };

  const finishAttempt = () => {
    setIsAttemptFinished(true);
    const correctAnswers = Object.keys(selectedAnswers).reduce((acc, key) => {
      if (selectedAnswers[key] === stateQuestions[key].correct) {
        return acc + 1;
      }
      return acc;
    }, 0);
    setScore(correctAnswers);
  };

  const nextPage = () => {
    if ((currentPage + 1) * 5 < stateQuestions.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    if (page >= 0 && page < Math.ceil(stateQuestions.length / 5)) {
      setCurrentPage(page);
    }
  };

  const questionsToDisplay = stateQuestions.slice(currentPage * 5, (currentPage + 1) * 5);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const getButtonStyle = (questionIndex, option) => {
    if (!isAttemptFinished) {
      return selectedAnswers[questionIndex] === option ? styles.selected : "";
    }
    if (stateQuestions[questionIndex]) {
      if (option === stateQuestions[questionIndex].correct) {
        return `${styles.correct} ${styles.selected}`;
      }
      if (selectedAnswers[questionIndex] === option) {
        return styles.incorrect;
      }
    }
    return "";
  };

  const getCorrectOptionStyle = (questionIndex, option) => {
    if (isAttemptFinished && selectedAnswers[questionIndex] !== stateQuestions[questionIndex].correct && option === stateQuestions[questionIndex].correct) {
      return styles.questionOptionGoodMark;
    }
    return "";
  };

  return (
    <div className={styles.container}>
      <div className={styles.questionsContainer}>
        {questionsToDisplay.map((question, index) => (
          <div key={index} className={styles.wholeQuestion}>
            <h2 className={styles.questionTitle}>{question.title}</h2>
            <div className={styles.optionsContainer}>
              {[
                question.option1,
                question.option2,
                question.option3,
                question.option4,
              ].map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(currentPage * 5 + index, option)}
                  className={`${styles.questionOption} ${getButtonStyle(
                    currentPage * 5 + index,
                    option
                  )} ${getCorrectOptionStyle(
                    currentPage * 5 + index,
                    option
                  )}`}
                  disabled={isAttemptFinished}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className={styles.paginationControls}>
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={styles.pageButton}
          >
            Anterior
          </button>
          {[...Array(Math.ceil(stateQuestions.length / 5)).keys()].map(
            (page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={styles.pageButton}
              >
                {page + 1}
              </button>
            )
          )}
          <button
            onClick={nextPage}
            disabled={(currentPage + 1) * 5 >= stateQuestions.length}
            className={styles.pageButton}
          >
            Siguiente
          </button>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.progressContainer}>
          {[...Array(stateQuestions.length).keys()].map((num) => (
            <div
              key={num}
              className={`${styles.progressSquare} ${
                selectedAnswers[num] ? styles.answered : ""
              }`}
            >
              {num + 1}
            </div>
          ))}
        </div>
        <div className={styles.summary}>
          {isAttemptFinished ? (
            <p>
              {score >= stateQuestions.length * 0.6
                ? "Aprobaste"
                : "No Aprobaste"}{" "}
              con una puntuación de {score}/{stateQuestions.length}
            </p>
          ) : (
            <>
              <p>
                Página: {currentPage + 1} /{" "}
                {Math.ceil(stateQuestions.length / 5)}
              </p>
              <p>
                Preguntas respondidas: {totalAnswered} / {stateQuestions.length}
              </p>
              <p>Tiempo restante: {formatTime(timeLeft)}</p>
            </>
          )}
        </div>
        {!isAttemptFinished && (
          <button onClick={finishAttempt} className={styles.finishButton}>
            Finalizar intento
          </button>
        )}
      </div>
    </div>
  );
}
