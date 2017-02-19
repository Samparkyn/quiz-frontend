'use strict';

import expect      from 'expect';
import { shallowComp } from '__tests__/helpers';
import AppBody     from '../AppBody';


// testing guides:
// http://redux.js.org/docs/recipes/WritingTests.html
// http://airbnb.io/enzyme/docs/api/shallow.html
// https://semaphoreci.com/community/tutorials/getting-started-with-tdd-in-react

describe('AppBody', () => {
  
  it('should render something', () => {
    const { output } = shallowComp(AppBody);
    expect(output.find('.app').length).toEqual(1);
  });

});
