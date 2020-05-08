import React, { Component } from 'react'
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './styles'

export default class ErrorBoundary extends Component {
  constructor() {
    super()

    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/A040Lxr.png' />
          <ErrorImageText>Error loading page</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children
  }
}
