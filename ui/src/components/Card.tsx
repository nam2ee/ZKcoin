import React from 'react';
import styles from '../styles/Card.module.css';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};

export default Card;
