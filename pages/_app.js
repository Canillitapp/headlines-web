import App, { Container } from 'next/app';
import ContextProvider from '../shared/components/ContextProvider';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </Container>
    );
  }
}

export default MyApp;
