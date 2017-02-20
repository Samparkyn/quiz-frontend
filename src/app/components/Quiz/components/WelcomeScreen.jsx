import React, { Component } from 'react';
import '../../../styles/quiz.css';

export default class WelcomeScreen extends Component {
  static propTypes = {
    
  }
  
  render() {
    return (
      <div className="ui-box quiz">
        <h1>Welcome to the Cash Flow Quiz!</h1>
        <p>What is your name?</p>
        <input></input>
        <button className="nxt-btn">Next</button>
      </div>
    );
  }
}
