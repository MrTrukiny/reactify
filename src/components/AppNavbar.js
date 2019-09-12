import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href='/'>Reactify</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <Link to={'/artists'} style={{textDecoration: 'none'}}>
                    <NavLink>Artistas</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to={'/artists'} style={{textDecoration: 'none'}}>
                    <NavLink>Géneros</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <NavLink href="http://github.com/mrtrukiny">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  };
};

export default AppNavbar