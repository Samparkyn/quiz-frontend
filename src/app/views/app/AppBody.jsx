'use strict';

import React, { PropTypes, Component } from 'react';

export default class AppBody extends Component {
  
  static propTypes = {
    params:   PropTypes.object,
    location: PropTypes.object,
    children: PropTypes.object
  };
  
  
  render() {
    const { children } = this.props;
    
    return (
      <div className="app">
        {children}
      </div>
    );
  }
}
