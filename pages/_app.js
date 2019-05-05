import App, { Container } from 'next/app'
import { FacebookProvider } from 'react-facebook'
import { UserProvider } from '../shared/contexts/UserContext'
import { ReactionsProvider } from '../shared/contexts/ReactionsContext'
import config from '../config'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <FacebookProvider appId={config.facebook.appId}>
          <UserProvider>
            <ReactionsProvider>
              <Component {...pageProps} />
            </ReactionsProvider>
          </UserProvider>
        </FacebookProvider>
      </Container>
    )
  }
}

export default MyApp
