import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

import logo from '../../../images/logo.png'

const Navbarr = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = ()=>{
        signOut(auth);
    }
    return (

        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <img src={logo} width='150px' alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="home#exparts">Exparts</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        {
                          user? <Nav.Link eventKey={2} onClick={()=> handleLogOut()}>
                          Log Out
                      </Nav.Link>:  <Nav.Link eventKey={2} as={Link} to='login'>
                            Log In
                        </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Navbarr;

