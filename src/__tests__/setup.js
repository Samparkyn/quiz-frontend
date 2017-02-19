'use strict';

import 'babel-polyfill';
import expect    from 'expect';
import expectJSX from 'expect-jsx';
import { jsdom } from 'jsdom';

// General TDD in React reference:
// https://semaphoreci.com/community/tutorials/getting-started-with-tdd-in-react

global.document  = jsdom('<!doctype html><html><body></body></html>');
global.window    = document.defaultView;
global.location  = {
  protocol: 'http'
};

global.alert = (msg) => msg;
global.VERSION = 0.4; // JSON.stringify(require('../../package.json').version);
global.window.performance = Date;
global.window.requestAnimationFrame = () => 0;
global.window.cancelAnimationFrame = () => false;

const exposedProperties = ['window', 'navigator', 'document'];
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

// global.navigator = global.window.navigator;
global.navigator = {
  userAgent: 'node.js'
};

expect.extend(expectJSX);

expect.extend({
  toBeCloseTo(value, precision = 2, message) {

    expect.assert(
      typeof this.actual === 'number',
      'The "actual" argument in expect(actual).toBeCloseTo() must be a number'
    );

    expect.assert(
      typeof value === 'number',
      'The "value" argument in toBeCloseTo(value) must be a number'
    );

    expect.assert(
      typeof precision === 'number',
      'The "precision" argument in toBeCloseTo(value, precision) must be a number'
    );

    // ref: https://github.com/jasmine/jasmine/blob/375a6f9fda57fdd896acce9abba7aca2e02b310a/src/core/matchers/toBeCloseTo.js
    const close = Math.abs(value - this.actual) < (Math.pow(10, -precision) / 2);

    expect.assert(
      close,
      (message || 'Expected %s to be within %s decimal places of %s'),
      this.actual,
      precision,
      value
    );
  }
});
