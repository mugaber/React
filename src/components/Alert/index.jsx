import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './alert.css'

import { connect } from 'react-redux'
import { Alert } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'

//

const Alertcomp = ({ alerts }) => {
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    setShowAlert(true)
  }, [alerts])

  return (
    alerts.length > 0 &&
    alerts.map(alert => (
      <CSSTransition
        unmountOnExit
        in={showAlert}
        timeout={300}
        classNames="alert-transition"
      >
        <Alert key={alert.id} variant={alert.alertType}>
          {alert.msg}
        </Alert>
      </CSSTransition>
    ))
  )
}

Alertcomp.propTypes = {
  alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  alerts: state.alert
})

export default connect(mapStateToProps)(Alertcomp)
