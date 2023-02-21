import React from 'react';
import css from './Statistics.module.css';
import { Notification } from 'components/Notification/Notificationю';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const isStatToShow = good || neutral || bad;
  return (
    <div className={css.statistic}>
      {isStatToShow ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
