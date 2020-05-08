import React, { useState } from 'react'
import './transition.css'

import { CSSTransition } from 'react-transition-group'
import { Container, Alert, Button } from 'react-bootstrap'

//
export const Transition = () => {
  const [showButton, setShowButton] = useState(true)
  const [showMessage, setShowMessage] = useState(false)

  return (
    <Container style={{ margin: '1rem 0 0' }}>
      {showButton && (
        <Button size="lg" onClick={() => setShowMessage(true)}>
          Show Message
        </Button>
      )}

      <CSSTransition
        unmountOnExit
        timeout={300}
        in={showMessage}
        classNames="transition-alert"
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert dismissible variant="primary" onClick={() => setShowMessage(false)}>
          <Alert.Heading>Animated alert message</Alert.Heading>
          <p>This alert message is being transitioned in and out of the DOM.</p>
          <Button onClick={() => setShowMessage(false)}>Close</Button>
        </Alert>
      </CSSTransition>
    </Container>
  )
}

export default Transition
