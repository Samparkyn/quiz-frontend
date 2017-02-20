'use strict';

import React, { PropTypes, Component }  from 'react';
import { Router, Route } from 'react-router';
import WelcomeScreen from '../../components/Quiz/components/WelcomeScreen';
import Question from '../../components/Quiz/components/Question';

import AppBody from './AppBody';

export default class AppRouter extends Component {
  
  static propTypes = {
    history: PropTypes.object.isRequired,
    store:   PropTypes.object.isRequired
  };
  
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const { history } = this.props;
    
    return (
      <Router history={history}>
        <Route path="/" component={AppBody}>
          <Route path="/quiz" component={WelcomeScreen} />
          <Route path="/quiz/question/:id" component={Question} />
        </Route>
      </Router>
    );
  }
}
