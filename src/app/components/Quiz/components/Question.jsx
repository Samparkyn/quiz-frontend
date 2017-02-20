import React, { PropTypes, Component } from 'react';

export default class Question extends Component {
  
  static propTypes = {
    questions: PropTypes.array,
    params: PropTypes.object
  }

  render() {
    const { questions } = this.props;
    console.log('question props', this.props);
    return (
      <div className="quiz">
        <p>Points so far: 10</p>
        <p>{questions}</p>
        <button className="nxt-btn">Next</button>
      </div>
    );
  }
}
