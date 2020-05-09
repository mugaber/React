import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

export const HooksPage = props => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `count ${count}`
  }, [count])

  useEffect(() => {
    return () => {
      document.title = 'React App'
    }
  }, [])

  return (
    <div className="page__container">
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  )
}

export default HooksPage
