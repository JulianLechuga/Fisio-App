import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { get_Question } from '../store/actions';
import styles from "./css/question.module.css"

export default function Questions() {
    let stateQuestion = useSelector(state => state.randomQuestion);
    let dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(get_Question());
    }, []);

    console.log(stateQuestion);

    function endQuestion() {
      dispatch(get_Question())
      document.getElementById("title").style.backgroundColor = "white"
      document.getElementById("option1").disabled = false;
      document.getElementById("option2").disabled = false;
      document.getElementById("option3").disabled = false;
      document.getElementById("option4").disabled = false;
    };

    let handleAnswer = (e) => {
      console.log(e.target.outerText);
      document.getElementById("option1").disabled = true;
      document.getElementById("option2").disabled = true;
      document.getElementById("option3").disabled = true;
      document.getElementById("option4").disabled = true;
      if (e.target.outerText === stateQuestion.correct) {
        alert("Bien!");
        document.getElementById("title").style.backgroundColor = "green"
        setTimeout(endQuestion, 3000)
      } else {
        document.getElementById("title").style.backgroundColor = "red"
        alert("A recursar");
        setTimeout(endQuestion, 3000)
      };
    };

    let handleNew = () => {
      if(window.confirm("Seguro?")){
        dispatch(get_Question());
      };
    };

  return (
    <div>
        <div className={styles.wholeQuestion}>
          <h2 id="title" className={styles.questionTitle}>{stateQuestion?.title}</h2>
          <br />
          <br />
              <button id="option1" onClick={handleAnswer} className={styles.questionOption}>{stateQuestion?.option1}</button>
              <button id="option2" onClick={handleAnswer} className={styles.questionOption}>{stateQuestion?.option2}</button>
              <button id="option3" onClick={handleAnswer} className={styles.questionOption}>{stateQuestion?.option3}</button>
              <button id="option4" onClick={handleAnswer} className={styles.questionOption}>{stateQuestion?.option4}</button>
        </div>
        <div>
          <h3 className={styles.resetQuestion} onClick={handleNew}>Nueva pregunta</h3>
        </div>
    </div>
  )
};