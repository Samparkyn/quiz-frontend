import React, { PropTypes, Component } from 'react';
import { connect }                     from 'react-redux';
import { getQuestions, nextQuestion }  from '../state/actions';


export class Question extends Component {
  
  static propTypes = {
    dispatch:        PropTypes.func,
    questions:       PropTypes.array,
    currentScore:    PropTypes.number,
    currentQuestion: PropTypes.number,
    params:          PropTypes.object
  }
  
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: -1
    };
  }
  
  componentWillMount() {
    const { questions, dispatch } = this.props;
    if (!questions.length) {
      dispatch(getQuestions());
    }
  }
  
  
  inputHandler = (e) => {
    const value = parseInt(e.target.value);
    this.setState({selectedAnswer: value});
  }
  

  render() {
    const { questions, currentQuestion, currentScore } = this.props;
    const { selectedAnswer } = this.state;

    if (!questions.length) {
      return <div>Loading questions...</div>;
    }

    const questionObj = questions[currentQuestion];
    const question = <div>{questionObj.question}</div>;
    const answers = questionObj.answers.map((answer, idx) => {
      const checked = selectedAnswer === idx;
      return (
        <label key={idx}>
          <input
            type="checkbox"
            checked={checked}
            onChange={this.inputHandler}
            value={idx} />
            {answer}
        </label>
      );
    });
    
    return (
      <div className="quiz ui-box">
        <p>{`Points so far: ${currentScore}`}</p>
        {question}
        {answers}
        <button className="nxt-btn">Next</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions:       state.quiz.questions,
    currentScore:    state.quiz.currentScore,
    currentQuestion: state.quiz.currentQuestion
  };
};

export default connect(mapStateToProps)(Question);
