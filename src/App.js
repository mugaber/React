import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store, persistor } from './redux'
import { PersistGate } from 'redux-persist/integration/react'

import Alert from 'components/Alert'
import Navbar from './components/Navbar'

import AlertPage from './pages/Alert'
import LanginPage from './pages/Landing'

//

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Navbar />
          <Alert />

          <Switch>
            <Route exact path='/' component={LanginPage} />
            <Route exact path='/alert' component={AlertPage} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
