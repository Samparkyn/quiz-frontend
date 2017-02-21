import * as types from './action-types';

export function getQuestions() {
  return (dispatch) => {
    dispatch(questionsRequest());
  
    fetch('http://localhost:3000/quiz/questions')
    .then(res => res.json())
    .then(res => {
      const data = {
        questions: res.questions,
        scores: res.scores
      };
      dispatch(questionsSuccess(data));
    })
    .catch(error => {
      console.error(error);
      dispatch(questionsFailure(error));
    });
  };
}

export function questionsRequest(data) {
  return {
    data: data,
    type: types.QUESTIONS_REQUEST
  };
}

export function questionsSuccess(data) {
  return {
    data: data,
    type: types.QUESTIONS_SUCCESS
  };
}

export function questionsFailure(data) {
  return {
    data: data,
    type: types.QUESTIONS_FAILURE
  };
}

export function startQuiz(data) {
  return {
    data: data,
    type: types.START_QUIZ
  };
}

export function nextQuestion(data) {
  return {
    data: data,
    type: types.NEXT_QUESTION
  };
}
