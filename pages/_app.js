import '../styles/antd.less'
import '../styles/checkout.scss'
import '../styles/globals.scss'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import store from 'epics/store'
import { PageTransition } from 'next-page-transitions'

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <PageTransition timeout={300} classNames="page-transition">
        <Component {...pageProps} />
      </PageTransition>
      <style jsx global>
        {`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}
      </style>
    </Provider>
  )
}

const makeStore = () => store

export default withRedux(makeStore)(MyApp)
