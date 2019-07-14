import App, { Container } from 'next/app'
import { UserProvider } from '../shared/contexts/UserContext'
import { ReactionsProvider } from '../shared/contexts/ReactionsContext'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <UserProvider>
          <ReactionsProvider>
            <Component {...pageProps} />
          </ReactionsProvider>
        </UserProvider>
      </Container>
    )
  }
}

export default MyApp
