import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { get_Farmaco_Question, get_Fisio_Question, get_Micro_Question } from "../store/actions";
import styles from "./css/question.module.css";

export default function Questions() {
  let stateQuestion = useSelector((state) => state.randomQuestion);
  let dispatch = useDispatch();
  const location = useLocation();
  const url = window.location.href.toLowerCase();

  useEffect(() => {
    const category = location.pathname.split("/")[1];
    if (category === "fisio") {
      dispatch(get_Fisio_Question());
    } else if (category === "micro") {
      dispatch(get_Micro_Question());
    } else if (category === "farmaco") {
      dispatch(get_Farmaco_Question());
    }
  }, [dispatch, location.pathname]);

  function endQuestion() {
    if (url.includes("fisio")) {
      dispatch(get_Fisio_Question());
    } else if (url.includes("micro")) {
      dispatch(get_Micro_Question());
    } else if (url.includes("farmaco")) {
      dispatch(get_Farmaco_Question());
    } else {
      console.error("URL does not contain fisio or micro keyword");
    }
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
      setTimeout(endQuestion, 4000);
    }
  };
  
  const handleNew = () => {
    if (url.includes("fisio")) {
      dispatch(get_Fisio_Question());
    } else if (url.includes("micro")) {
      dispatch(get_Micro_Question());
    } else if (url.includes("farmaco")) {
      dispatch(get_Farmaco_Question());
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
