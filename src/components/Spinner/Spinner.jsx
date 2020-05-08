import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './spinner.styles'

const Spinner = () => (
  <SpinnerContainer style={{ position: 'absolute', top: '50vh', left: '50vw' }}>
    <SpinnerOverlay />
  </SpinnerContainer>
)
export default Spinner
