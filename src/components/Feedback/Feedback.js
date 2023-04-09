import React from "react";
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

  handleButtonGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      }
    });
  };

    handleButtonNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      }
    });
  };

    handleButtonBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
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
        <div>
          <button type="button" onClick={this.handleButtonGood}>Good</button>
          <button type="button" onClick={this.handleButtonNeutral}>Neutral</button>
          <button type="button" onClick={this.handleButtonBad}>Bad</button>
        </div>
        <div>
          <h3>Statistics</h3>
          <p>Good: <span>{this.state.good}</span></p>
          <p>Neutral: <span>{this.state.neutral}</span></p>
          <p>Bad: <span>{this.state.bad}</span></p>
          <p>Total feedback: <span>{this.countTotalFeedback()}</span></p>
          <p>Positive feedback percentage: <span>{this.countPositiveFeedbackPercentage()}%</span></p>
        </div>
      </div>
    )
  }
}

export default Feedback;