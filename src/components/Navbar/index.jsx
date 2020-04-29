import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

//

export const AppNavbar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand>React</Navbar.Brand>

      <Nav className='mr-auto'>
        <Link to='/' className='styled-button navbar-link'>
          Home
        </Link>

        <Link to='/alert' className='styled-button navbar-link'>
          Alert
        </Link>
      </Nav>

      <Form inline>
        <FormControl type='text' placeholder='Search' className='mr-sm-2' />
        <Button variant='outline-info'>Search</Button>
      </Form>
    </Navbar>
  )
}

export default AppNavbar
