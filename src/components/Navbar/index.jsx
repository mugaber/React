import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

const StyledLink = ({ to, name }) => (
  <Link to={to} className="styled-button navbar-link">
    {name}
  </Link>
)

//

export const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>React</Navbar.Brand>

      <StyledLink to="/" name="Home" />
      <StyledLink to="/alert" name="Alert" />
      <StyledLink to="/fetch" name="Fetch" />
      <StyledLink to="/transition" name="Transition" />
    </Navbar>
  )
}

export default AppNavbar
