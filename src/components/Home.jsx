import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Seleccione una categoría</h1>
      <div className={styles.linkContainer}>
        <Link to="/fisio" className={styles.link}>Fisiología</Link>
        <Link to="/micro" className={styles.link}>Microbiología - Todo</Link>
        <Link to="/microvirus" className={styles.link}>Microbiología - Virus</Link>
        <Link to="/microfungi" className={styles.link}>Microbiología - Hongos </Link>
        <Link to="/microbacterium" className={styles.link}>Microbiología - Bacterias</Link>
        <Link to="/farmaco" className={styles.link}>Farmacología</Link>
      </div>
    </div>
  );
}
