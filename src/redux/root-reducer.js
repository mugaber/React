import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import alertReducer from './alert/reducer'

const persistConfig = {
  key: 'react-ecosystem',
  storage: storage,
}

const rootReducer = combineReducers({
  alert: alertReducer,
})

export default persistReducer(persistConfig, rootReducer)
