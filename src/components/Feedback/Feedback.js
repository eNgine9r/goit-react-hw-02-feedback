import React from "react";
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
// import css from './Feedback.css';

class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleButtonClick = (feedbackType) => {
    this.setState(prevState => {
      return {
        [feedbackType]: prevState[feedbackType] + 1,
      }
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positive = this.state.good;
    return total > 0 ? Math.round((positive / total) * 100) : 0;
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions 
          onLeaveFeedback={this.handleButtonClick}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage} />
      </div>
    )
  }
}

export default Feedback;