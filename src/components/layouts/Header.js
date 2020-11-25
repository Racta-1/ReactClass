import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Teachers from '../teacher/Teachers';
import Students from '../student/Students';
import Gallery from '../gallery/Gallery';
import SingleGallery from '../gallery/SingleGallery';
import Home from '../Home';
import logo from '../../logo192.png';
import '../../App.css';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="warning" expand="lg">
          <Container fluid className="text-white">
            <Navbar.Brand>
              <Link to="/" className="navbar-brand text-white">
                <img
                  src={logo}
                  alt="logo"
                  width="50"
                  className="App-logo mr-3"
                />
                TeachStu App
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav>
                  <Link className="nav-link text-white mr-5" to="/">
                    Home
                  </Link>
                </Nav>
                <Nav>
                  <Link className="nav-link text-white mr-5" to="/teachers">
                    Teachers
                  </Link>
                </Nav>
                <Nav>
                  <Link className="nav-link text-white mr-5" to="/students">
                    Students
                  </Link>
                </Nav>
                <Nav>
                  <Link className="nav-link text-white" to="/gallery">
                    Gallery
                  </Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/students" component={Students} />
        <Route exact path="/gallery" component={Gallery} />
        <Route path="/gallery/:id" component={SingleGallery} />
      </React.Fragment>
    );
  }
}

export default Header;
