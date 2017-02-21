import * as types from './action-types';

const initialState = {
  questions: [],
  scores: [],
  playerName: '',
  currentScore: 0,
  status: '',
  error: ''
};

export default function QuizReducer(state = initialState, action = {}) {
  switch (action.type) {
  case types.QUESTIONS_REQUEST:
    {
      return Object.assign({}, state, {
        status: 'requesting questions'
      });
    }
    

  case types.QUESTIONS_SUCCESS:
    {
      return Object.assign({}, state, {
        questions: action.data.questions,
        scores: action.data.scores,
        status: '',
        error: ''
      });
    }
    
  
  case types.QUESTIONS_FAILURE:
    {
      return Object.assign({}, state, {
        status: 'error',
        error: action.data
      });
    }
    
  
  case types.START_QUIZ:
    {
      return Object.assign({}, state, {
        playerName: action.data,
        currentScore: 0
      });
    }


  case types.NEXT_QUESTION:
    {
      const answer = action.data;
      const score = state.scores[answer];
      return Object.assign({}, state, {
        currentScore: state.currentScore + score
      });
    }
    
  case types.RESET_GAME:
    return initialState;
    
  default: return state;
  }
}
