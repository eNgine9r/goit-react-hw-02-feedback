import React from "react";
import css from './Feedback.module.css';

const FeedbackOptions = ({onLeaveFeedback}) => {
  return (
    <>
      <div className={css.button}>
        <button type="button" onClick={() => onLeaveFeedback('good')}>Good</button>
        <button type="button" onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
        <button type="button" onClick={() => onLeaveFeedback('bad')}>Bad</button>
      </div>
    </>
  )
}

export default FeedbackOptions;