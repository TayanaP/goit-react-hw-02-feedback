import { Component } from "react"
import {FeedbackOptions} from 'components/FeedbackOptions/FeedbackOptions'
import {Statistics} from 'components/Statistics/Statistics'
import {Section} from 'components/Section/Section'
import { Notification } from "./Notification/Notification"

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (option) => {
    this.setState((state) => ({
      [option]: state[option] + 1
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render(){
    const { good, neutral, bad } = this.state;
    const leaveFeedback = this.onLeaveFeedback;
    const totalFeedback = this.countTotalFeedback(this.state);
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage(this.state)

    return (
      <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={leaveFeedback}
          />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
          ): (
            <Notification message="There is no feedback" />
          )}
        </Section>
        </div>
    )
  }
};
