import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store, persistor } from './redux'
import { PersistGate } from 'redux-persist/integration/react'

import Alert from 'components/Alert'
import Navbar from './components/Navbar'
import Spinner from 'components/Spinner/Spinner'
import ErrorBoundary from 'components/ErrorBoundary'

const AlertPage = lazy(() => import('./pages/Alert'))
const HomePage = lazy(() => import('./pages/Home'))

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
                <Route exact path='/' component={HomePage} />
                <Route exact path='/alert' component={AlertPage} />
              </Suspense>
            </Switch>
          </ErrorBoundary>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
