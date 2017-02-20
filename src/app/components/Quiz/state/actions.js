import * as types from './action-types';


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

export function showResults(data) {
  return {
    data: data,
    type: types.SHOW_RESULTS
  };
}
