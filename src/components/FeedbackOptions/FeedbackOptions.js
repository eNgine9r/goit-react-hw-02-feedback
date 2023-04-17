import React from "react";
import PropTypes from "prop-types";
import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({onLeaveFeedback}) => {
  return (
    <>
      <div className={css.buttonList}>
        <button className={css.button} type="button" onClick={() => onLeaveFeedback('good')}>Good</button>
        <button className={css.button} type="button" onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
        <button className={css.button} type="button" onClick={() => onLeaveFeedback('bad')}>Bad</button>
      </div>
    </>
  )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired
}

