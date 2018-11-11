import React from 'react';
import { ContextConsumer } from '../components/ContextProvider';

/**
 * withContext should return state and actions to the wrapped component
 * @param {Component} WrappedComponent
 */

export default function withContext(WrappedComponent) {
  return class WithContext extends React.Component {
    render() {
      return (
        <ContextConsumer>
          {context => <WrappedComponent {...this.props} {...context} />}
        </ContextConsumer>
      );
    }
  };
}
