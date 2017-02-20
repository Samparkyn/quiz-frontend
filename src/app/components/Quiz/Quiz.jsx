import React, { Component } from 'react';
import '../../styles/quiz.css';

export default class Quiz extends Component {
  static propTypes = {
    
  }
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="quiz">
        <h1>Welcome to the Cash Flow Quiz!</h1>
        <p>What is your name?</p>
        <input></input>
        <button className="nxt-btn">Next</button>
      </div>
    );
  }
}
