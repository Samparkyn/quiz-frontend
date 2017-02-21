import React, { PropTypes, Component }           from 'react';
import { connect }                               from 'react-redux';
import { getQuestions, nextQuestion, startQuiz } from '../state/actions';
import { push, replace }                         from 'react-router-redux';

export class Question extends Component {
  
  static propTypes = {
    dispatch:        PropTypes.func,
    questions:       PropTypes.array,
    currentScore:    PropTypes.number,
    currentQuestion: PropTypes.number,
    params:          PropTypes.object,
    playerName:      PropTypes.string
  }
  
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      selectedAnswer: '',
      error: ''
    };
  }
  
  
  componentWillReceiveProps(nextProps) {
    const { params } = nextProps;
    const nextQuestionIdx = parseInt(params.id) - 1;
    
    if (params.id !== this.state.currentQuestion) {
      this.setState({currentQuestion: nextQuestionIdx});
    }
  }
  
  
  componentWillMount() {
    const { questions, dispatch, params } = this.props;
    if (!questions.length) {
      dispatch(getQuestions());
    }
    
    this.setState({currentQuestion: parseInt(params.id) - 1});
  }
  
  
  inputHandler = (e) => {
    const value = parseInt(e.target.value);
    this.setState({selectedAnswer: value});
  }
  
  
  clickHandler = () => {
    const { selectedAnswer, currentQuestion } = this.state;
    const { dispatch, questions } = this.props;
    
    if (selectedAnswer === '') {
      this.setState({error: 'Select an answer first'});
      return;
    }
    
    this.setState({error: '', selectedAnswer: ''});
    dispatch(nextQuestion(this.state.selectedAnswer));
    
    if (currentQuestion < questions.length - 1) {
      dispatch(push(`/quiz/question/${currentQuestion + 2}`));
    } else {
      dispatch(push('/quiz/results'));
    }
  }
  

  render() {
    const { questions, currentScore } = this.props;
    const { selectedAnswer, error, currentQuestion } = this.state;
  
    if (!questions.length) {
      return <div>Loading questions...</div>;
    }
    
    let errorMsg;
    if (error) {
      errorMsg = <div className="error">{error}</div>;
    }

    const questionObj = questions[currentQuestion];
    const question = <div  className="question">{questionObj.question}</div>;
    const answerRows = questionObj.answers.map((answer, idx) => {
      const checked = selectedAnswer === idx;
      return (
        <label key={idx} className="answer-row">
          <input
            className="checkbox"
            type="checkbox"
            checked={checked}
            onChange={this.inputHandler}
            value={idx} />
            {answer}
        </label>
      );
    });
    
    const answers = (
      <div className="answers">
        {answerRows}
      </div>
    );
    
    const score = <p>{`Points so far: ${currentScore}`}</p>;
    const lastQuestion = currentQuestion === questions.length - 1;
    const nextBtn = (
      <button
        onClick={this.clickHandler}
        className="nxt-btn">
        {lastQuestion ? 'Show results' : 'Next'}
      </button>
    );
    
    return (
      <div className="ui-box question-container">
        {score}
        {errorMsg}
        {question}
        {answers}
        {nextBtn}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions:       state.quiz.questions,
    currentScore:    state.quiz.currentScore,
    currentQuestion: state.quiz.currentQuestion,
    playerName:      state.quiz.playerName
  };
};

export default connect(mapStateToProps)(Question);
