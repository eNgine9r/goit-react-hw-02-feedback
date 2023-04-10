import React from "react";
import PropTypes from 'prop-types';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    initialValue: PropTypes.number,
  };

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
    const totalFeedback = this.countTotalFeedback();
    
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions 
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage} 
            />
            ) : (
          <Notification message="There is no feedback" />
        )}
          </Section>
        
      </div>
    )
  }
}

export default Feedback;