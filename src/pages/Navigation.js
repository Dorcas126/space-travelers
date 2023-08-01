import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import image from '../assets/logo.png';

const Navigation = () => {
  const links = [
    {
      id: 1,
      path: '/rockets',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/myprofile',
      text: 'My Profile',
    },
  ];

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <img className="img-fluid img mr-2" src={image} alt="spacelogo" width="60" />
          <span className="nav-brand">Space Travellers&apos; Hub</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map((link) => (
              <Nav.Item key={link.id}>
                <NavLink className="nav-link" to={link.path}>
                  {link.text}
                </NavLink>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
