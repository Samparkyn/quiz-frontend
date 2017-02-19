'use strict';

import './app.css';

import React                    from 'react';
import ReactDOM                 from 'react-dom';
import { useRouterHistory }     from 'react-router';
import { createHistory }        from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider }             from 'react-redux';
import AppRouter                from './app/views/app/AppRouter';
import configureStore           from './app/state/configure-store';

const initialState = window.__INITIAL_STATE__ || {};
const history = useRouterHistory(createHistory)();
const store   = configureStore(initialState, history);
syncHistoryWithStore(history, store);

console.info(
  ' Launching...\n %cCashflow•Quiz%c',
  'font-size: 18px; font-weight: 400; font-family: HelveticaNeue, Arial, sans-serif;',
  '');

// wrap in the Redux Provider so that the store is added to the context for the child components
ReactDOM.render(
  <Provider store={store}>
    <AppRouter history={history} store={store} />
  </Provider>,
  document.getElementById('root')
);
