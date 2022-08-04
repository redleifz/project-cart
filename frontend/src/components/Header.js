import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>

    <Container fluid>
      <LinkContainer to='/'>
        <Navbar.Brand>Jongjate Shop</Navbar.Brand>
      </LinkContainer>
        
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className='mr-auto'>

          <LinkContainer to='/cart'>
              <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/login'>
            <Nav.Link><i className='fas fa-user'></i>Login</Nav.Link>
          </LinkContainer>
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header