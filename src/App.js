import React, { lazy, Suspense } from 'react'
import { CSSTransition } from 'react-transition-group'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store, persistor } from './redux'
import { PersistGate } from 'redux-persist/integration/react'

import Alert from 'components/Alert'
import Navbar from './components/Navbar'
import Spinner from 'components/Spinner/Spinner'
import ErrorBoundary from 'components/ErrorBoundary'

const HomePage = lazy(() => import('./pages/home'))
const AlertPage = lazy(() => import('./pages/alert'))
const FetchPage = lazy(() => import('./pages/fetch'))
const TransitionPage = lazy(() => import('pages/transition'))

//

const routes = [
  { path: '/', component: HomePage },
  { path: '/alert', component: AlertPage },
  { path: '/fetch', component: FetchPage },
  { path: '/transition', component: TransitionPage }
]

const CustomRoute = ({ path, Component }) => (
  <Route exact path={path}>
    {({ match }) => (
      <CSSTransition
        unmountOnExit
        in={match !== null}
        timeout={300}
        classNames="page-transition"
      >
        <div className="page-transition">
          <Component />
        </div>
      </CSSTransition>
    )}
  </Route>
)

//

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Navbar />
          <Alert />

          <ErrorBoundary>
            <Switch>
              <Suspense fallback={<Spinner />}>
                {routes.map(({ path, component }) => (
                  <CustomRoute key={path} path={path} Component={component} />
                ))}
              </Suspense>
            </Switch>
          </ErrorBoundary>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
