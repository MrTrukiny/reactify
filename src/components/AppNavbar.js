import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

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
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container className="navbar-container">
            <Link
              to="/"
              className="navbar-brand"
              style={{ textDecoration: "none", color: "white" }}
            >
              Reactify
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link
                    to={"/artists"}
                    style={{ textDecoration: "none" }}
                    className="nav-link"
                  >
                    Artistas
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to={"/genres"}
                    style={{ textDecoration: "none" }}
                    className="nav-link"
                  >
                    Géneros
                  </Link>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/MrTrukiny/reactify" target="_blank">
                    GitHub
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
