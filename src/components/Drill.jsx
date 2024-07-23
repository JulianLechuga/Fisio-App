import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/home.module.css';

export default function Drill() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Seleccione una matería para generar el exámen</h1>
      <div className={styles.linkContainer}>
        <Link to="/drill/fisio" className={styles.link}>Fisiología</Link>
        <Link to="/drill/micro" className={styles.link}>Microbiología - Todo</Link>
        <Link to="/drill/microvirus" className={styles.link}>Microbiología - Virus</Link>
        <Link to="/drill/microfungi" className={styles.link}>Microbiología - Hongos </Link>
        <Link to="/drill/microbacterium" className={styles.link}>Microbiología - Bacterias</Link>
        <Link to="/drill/farmaco" className={styles.link}>Farmacología</Link>
      </div>
    </div>
  );
}
