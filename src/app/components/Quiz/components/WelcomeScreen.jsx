import React, { PropTypes, Component } from 'react';
import { startQuiz, getQuestions } from '../state/actions';
import { connect } from 'react-redux';

export class WelcomeScreen extends Component {
  static propTypes = {
    dispatch: PropTypes.func
  }
  
  componentWillMount() {
    this.props.dispatch(getQuestions());
  }
  
  clickHandler = () => {
    const value = this.refs.name.value;
    this.props.dispatch(startQuiz(value));
  }
  
  render() {
    return (
      <div className="ui-box quiz">
        <h1>Welcome to the Cash Flow Quiz!</h1>
        <p>What is your name?</p>
        <input ref="name"></input>
        <button className="nxt-btn" onClick={this.clickHandler}>Next</button>
      </div>
    );
  }
}

export default connect()(WelcomeScreen);
