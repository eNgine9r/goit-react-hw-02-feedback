import React from "react"
import PropTypes from "prop-types";
import css from './Statistics.module.css';


const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) => {
  return (
    <>
      <div className={css.conteinerStatistics}>
        <p>Good: <span>{good}</span></p>
        <p>Neutral: <span>{neutral}</span></p>
        <p>Bad: <span>{bad}</span></p>
        <p>Total feedback: <span>{countTotalFeedback()}</span></p>
        <p>Positive feedback percentage: <span>{countPositiveFeedbackPercentage()}%</span></p>
      </div>
    </>
  )
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
}

