import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="home-page__container">
      <Link to="/hooks" className="styled-button">
        Hooks
      </Link>
      <h1 className="home-page__header">Home page</h1>
    </div>
  )
}

export default HomePage
