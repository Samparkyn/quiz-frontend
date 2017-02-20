import * as types from './action-types';

const initialState = {
  questions: [],
  answers: {},
  playerName: '',
  score: 0,
  currentQuestion: 0,
  status: '',
  error: ''
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case types.QUESTIONS_REQUEST:
    {
      return Object.assign({}, state, {
          
      });
    }
    

  case types.QUESTIONS_SUCCESS:
    {
      return Object.assign({}, state, {
          
      });
    }
    
  
  case types.QUESTIONS_FAILURE:
    {
      return Object.assign({}, state, {
          
      });
    }
    
  
  case types.START_QUIZ:
    {
      return Object.assign({}, state, {
          
      });
    }


  case types.NEXT_QUESTION:
    {
      return Object.assign({}, state, {
          
      });
    }


  case types.SHOW_RESULTS:
    {
      return Object.assign({}, state, {
          
      });
    }
    
  default: return state;
  }
}
