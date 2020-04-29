import { REMOVE_ALERT, SET_ALERT } from '../action-types'
import { v4 as uuidv4 } from 'uuid'

export const removeAlert = alertId => dispatch => {
  dispatch({
    type: REMOVE_ALERT,
    payload: alertId
  })
}

export const setAlert = (msg, alertType) => dispatch => {
  const id = uuidv4()

  dispatch({
    type: SET_ALERT,
    payload: {
      id,
      msg,
      alertType
    }
  })

  setTimeout(() => {
    dispatch(removeAlert(id))
  }, 5000)
}
