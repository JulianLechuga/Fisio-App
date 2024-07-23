import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { get_Farmaco_Question, get_Fisio_Question, get_Micro_Bacterium_Question, get_Micro_Fungi_Question, get_Micro_Question, get_Micro_Virus_Question } from "../store/actions";
import styles from "./css/question.module.css";

export default function Questions() {
  const stateQuestion = useSelector((state) => state.randomQuestion);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleNew = useCallback(() => {
    const urlPath = location.pathname.toLowerCase();
    const pathSegment = urlPath.split('/')[1];

    if (pathSegment === "fisio") {
      dispatch(get_Fisio_Question());
    } else if (pathSegment === "microvirus") {
      dispatch(get_Micro_Virus_Question());
    } else if (pathSegment === "microbacterium") {
      dispatch(get_Micro_Bacterium_Question());
    } else if (pathSegment === "microfungi") {
      dispatch(get_Micro_Fungi_Question());
    } else if (pathSegment === "micro") {
      dispatch(get_Micro_Question());
    } else if (pathSegment === "farmaco") {
      dispatch(get_Farmaco_Question());
    } else {
      console.error("URL does not contain any keyword");
    }
  }, [dispatch, location.pathname]);

  useEffect(() => {
    handleNew();
  }, [handleNew]);

  const handleAnswer = (e) => {
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    const option3 = document.getElementById("option3");
    const option4 = document.getElementById("option4");
    const reset = document.getElementById("reset");
  
    if (option1 && option2 && option3 && option4 && reset) {
      option1.disabled = true;
      option2.disabled = true;
      option3.disabled = true;
      option4.disabled = true;
      reset.disabled = true;
  
      const selectedOptionId = e.target.id;
      const correctOptionId = Object.keys(stateQuestion).find(key => stateQuestion[key] === stateQuestion.correct);
  
      if (e.target.outerText === stateQuestion.correct) {
        if (document.getElementById(selectedOptionId)) {
          document.getElementById(selectedOptionId).className = styles.questionOptionGood;
        }
      } else {
        if (document.getElementById(selectedOptionId)) {
          document.getElementById(selectedOptionId).className = styles.questionOptionBad;
        }
        if (document.getElementById(correctOptionId)) {
          document.getElementById(correctOptionId).className = styles.questionOptionGoodMark;
        }
      }
      setTimeout(handleNew, 4000);
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
