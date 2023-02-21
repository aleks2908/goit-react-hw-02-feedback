import React from 'react';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onClickButton }) => {
  return (
    <div className={css.buttonList}>
      <button
        type="button"
        name="good"
        className={css.button}
        onClick={onClickButton}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        className={css.button}
        onClick={onClickButton}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        className={css.button}
        onClick={onClickButton}
      >
        Bad
      </button>
    </div>
  );
};
