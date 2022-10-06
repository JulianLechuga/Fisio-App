import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { get_Question } from '../store/actions';
import styles from "./css/question.module.css"

export default function Questions() {
    let stateQuestion = useSelector(state => state.randomQuestion);
    let dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(get_Question());
    }, []);

    function endQuestion() {
      dispatch(get_Question())
      document.getElementById("title").className = styles.questionTitle;
      document.getElementById("option1").disabled = false;
      document.getElementById("option2").disabled = false;
      document.getElementById("option3").disabled = false;
      document.getElementById("option4").disabled = false;
      document.getElementById("option1").className = styles.questionOption;
      document.getElementById("option2").className = styles.questionOption;
      document.getElementById("option3").className = styles.questionOption;
      document.getElementById("option4").className = styles.questionOption;
    };

    let handleAnswer = (e) => {
      document.getElementById("option1").disabled = true;
      document.getElementById("option2").disabled = true;
      document.getElementById("option3").disabled = true;
      document.getElementById("option4").disabled = true;
      console.log(e);
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
      };
    };

    let handleNew = () => {
        dispatch(get_Question());
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