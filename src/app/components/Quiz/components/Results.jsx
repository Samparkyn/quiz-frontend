import React, { PropTypes, Component } from 'react';
import { connect }                     from 'react-redux';
import { resetGame }                   from '../state/actions';
import { replace }                     from 'react-router-redux';

export class Results extends Component {
  static propTypes = {
    currentScore: PropTypes.number,
    playerName:   PropTypes.string,
    dispatch:     PropTypes.func,
    scores:       PropTypes.array,
    questions:    PropTypes.array
  }
  
  clickHandler = () => {
    const { dispatch } = this.props;
    dispatch(resetGame());
    dispatch(replace('/quiz'));
  }

  render() {
    const { currentScore, playerName, questions, scores } = this.props;
    
    const bestAnswer = scores[0];
    const maxPoints = (questions.length * bestAnswer) || 0;
    const scorePercentage = (currentScore / maxPoints) * 100 || 0;

    let remarkMsg;
    if (scorePercentage < 70) {
      remarkMsg = 'You desperately need help... call Float ASAP!!';
    } else if (scorePercentage === 100) {
      remarkMsg = 'Good to see that you\'ve learning from Float! :-)';
    } else {
      remarkMsg = 'Not bad... if you want a perfect score, call Float!';
    }
    
    const funnyRemark = <div className="funny-remark">{remarkMsg}</div>;
    const message = `You scored ${currentScore} points out of a possible ${maxPoints} in our cash flow quiz`;
    
    const score = <div>{message}</div>;
    const name  = <div className="player-message">Thank you {playerName || 'John doe'}!</div>;
    const btn   = <button className = "nxt-btn" onClick = {this.clickHandler}>Try Again</button>;
    
    return (
      <div className="ui-box results-page">
        {name}
        {score}
        {funnyRemark}
        {btn}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentScore: state.quiz.currentScore,
    playerName:   state.quiz.playerName,
    scores:       state.quiz.scores,
    questions:    state.quiz.questions
  };
};

export default connect(mapStateToProps)(Results);
