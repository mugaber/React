import React from 'react'
import './alert.css'
import { Button } from 'react-bootstrap'

import { connect } from 'react-redux'
import { setAlert } from 'redux/alert/actions'

//

export const AlertPage = ({ setAlert }) => {
  const handleClick = e => {
    const alertType = e.target.name === 'success' ? 'success' : 'danger'
    const msg =
      e.target.name === 'success'
        ? 'You clicked Success button'
        : 'You clicked Danger button'

    setAlert(msg, alertType)
  }

  return (
    <div>
      <Button
        name='danger'
        variant='danger'
        onClick={handleClick}
        className='styled-button alert-button'
      >
        Danger
      </Button>

      <Button
        name='success'
        variant='success'
        onClick={handleClick}
        className='styled-button alert-button'
      >
        Success
      </Button>
    </div>
  )
}

export default connect(null, { setAlert })(AlertPage)
