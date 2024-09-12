// pages/index.js
import React from 'react';
import styles from './Home.module.css';
import Card from './Card';

const cardsData = [
  { id: 1, frontText: 'Front 1', backText: 'Back 1' },
  { id: 2, frontText: 'Front 2', backText: 'Back 2' },
  { id: 3, frontText: 'Front 3', backText: 'Back 3' },
];

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardsGrid}>
        {cardsData.map((card) => (
          <Card key={card.id} frontText={card.frontText} backText={card.backText} />
        ))}
      </div>
    </div>
  );
};

export default Home;
