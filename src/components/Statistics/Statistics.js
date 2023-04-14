import React from "react"

const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) => {
  return (
    <>
      <div>
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

