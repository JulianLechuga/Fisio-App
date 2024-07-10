import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/home.module.css';

export default function Drill() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Seleccione una matería para generar el exámen</h1>
      <div className={styles.linkContainer}>
        <Link to="/drill/fisio" className={styles.link}>Fisiología</Link>
        <Link to="/drill/micro" className={styles.link}>Microbiología</Link>
        <Link to="/drill/farmaco" className={styles.link}>Farmacología</Link>
      </div>
    </div>
  );
}
