import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

//

export const AppNavbar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand>React</Navbar.Brand>

      <Link to='/' className='styled-button navbar-link'>
        Home
      </Link>

      <Link to='/alert' className='styled-button navbar-link'>
        Alert
      </Link>
    </Navbar>
  )
}

export default AppNavbar
