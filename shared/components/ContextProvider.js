/* eslint-disable */
import React, { Component } from 'react';

const Context = React.createContext();

class ContextProvider extends Component {
  state = {
    userId: null,
    newsId: null,
  };
  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          actions: {
            setUserId: userId => this.setState({ userId }),
            setNewsId: newsId => this.setState({ newsId }),
            clearNewsId: () => this.setState({ newsId: null }),
          },
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const ContextConsumer = Context.Consumer;

export default ContextProvider;
export { ContextConsumer };
