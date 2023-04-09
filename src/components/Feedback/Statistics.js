import React from "react"

export const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) => {
  return (
    <>
      <div>
        <h3>Statistics</h3>
        <p>Good: <span>{good}</span></p>
        <p>Neutral: <span>{neutral}</span></p>
        <p>Bad: <span>{bad}</span></p>
        <p>Total feedback: <span>{countTotalFeedback()}</span></p>
        <p>Positive feedback percentage: <span>{countPositiveFeedbackPercentage()}%</span></p>
      </div>
    </>
  )
};

