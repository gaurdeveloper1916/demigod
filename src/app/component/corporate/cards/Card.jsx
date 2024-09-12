// components/Card.js
import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  const  frontText= 'Front 1'
 const  backText= 'Back 1'
  return (
    <div className={styles.card}>
      <div className={styles.front}>{frontText}</div>
      <div className={styles.back}>{backText}</div>
    </div>
  );
};

export default Card;
