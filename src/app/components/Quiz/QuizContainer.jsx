import React, { PropTypes, Component } from 'react';
import { fetchQuestions } from '../utils/fetch-questions';
import WelcomeScreen from './components/WelcomeScreen';

export default class MyComponent extends Component {
  static propTypes = {
    questions: PropTypes.array
  }
  
  constructor(props) {
    super(props);
    this.getQuestions = this.getQuestions.bind(this);
    this.state = {
      questions: []
    };
  }

  componentWillMount() {
    this.getQuestions();
  }

  getQuestions() {
    fetchQuestions()
      .then(res => {
        this.setState({
          questions: res.questions
        });
        console.log(res.questions);
      });
  }

  render() {
    return (
      <div>
        <WelcomeScreen />
      </div>
    );
  }
}
