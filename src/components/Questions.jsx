import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { get_Fisio_Question, get_Micro_Question } from "../store/actions";
import styles from "./css/question.module.css";

export default function Questions(questions) {
  let stateQuestion = useSelector((state) => state.randomQuestion);
  let dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const category = location.pathname.split("/")[1];

    if (category === "fisio") {
      dispatch(get_Fisio_Question());
    } else if (category === "micro") {
      dispatch(get_Micro_Question());
    }
  }, [dispatch, location.pathname]);

  function endQuestion() {
    dispatch(get_Fisio_Question());
    document.getElementById("title").className = styles.questionTitle;
    document.getElementById("option1").disabled = false;
    document.getElementById("option2").disabled = false;
    document.getElementById("option3").disabled = false;
    document.getElementById("option4").disabled = false;
    document.getElementById("reset").disabled = false;
    document.getElementById("option1").className = styles.questionOption;
    document.getElementById("option2").className = styles.questionOption;
    document.getElementById("option3").className = styles.questionOption;
    document.getElementById("option4").className = styles.questionOption;
  }

  let handleAnswer = (e) => {
    document.getElementById("option1").disabled = true;
    document.getElementById("option2").disabled = true;
    document.getElementById("option3").disabled = true;
    document.getElementById("option4").disabled = true;
    document.getElementById("reset").disabled = true;
    if (e.target.outerText === stateQuestion.correct) {
      document.getElementById("title").className = styles.questionTitleGood;
      document.getElementById("option1").className = styles.questionOptionGood;
      document.getElementById("option2").className = styles.questionOptionGood;
      document.getElementById("option3").className = styles.questionOptionGood;
      document.getElementById("option4").className = styles.questionOptionGood;
      setTimeout(endQuestion, 4000);
    } else {
      document.getElementById("title").className = styles.questionTitleBad;
      document.getElementById("option1").className = styles.questionOptionBad;
      document.getElementById("option2").className = styles.questionOptionBad;
      document.getElementById("option3").className = styles.questionOptionBad;
      document.getElementById("option4").className = styles.questionOptionBad;
      setTimeout(endQuestion, 4000);
    }
  };

  const handleNew = () => {
    const url = window.location.href.toLowerCase();

    if (url.includes("fisio")) {
      dispatch(get_Fisio_Question());
    } else if (url.includes("micro")) {
      dispatch(get_Micro_Question());
    } else {
      console.error("URL does not contain fisio or micro keyword");
    }
  };

  return (
    <div>
      <div className={styles.wholeQuestion}>
        <h2 id="title" className={styles.questionTitle}>
          {stateQuestion?.title}
        </h2>
        <br />
        <br />
        <button
          id="option1"
          onClick={handleAnswer}
          className={styles.questionOption}
        >
          {stateQuestion?.option1}
        </button>
        <button
          id="option2"
          onClick={handleAnswer}
          className={styles.questionOption}
        >
          {stateQuestion?.option2}
        </button>
        <button
          id="option3"
          onClick={handleAnswer}
          className={styles.questionOption}
        >
          {stateQuestion?.option3}
        </button>
        <button
          id="option4"
          onClick={handleAnswer}
          className={styles.questionOption}
        >
          {stateQuestion?.option4}
        </button>
      </div>
      <div>
        <button id="reset" className={styles.resetQuestion} onClick={handleNew}>
          Nueva pregunta
        </button>
      </div>
    </div>
  );
}
