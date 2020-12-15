import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Teachers from '../teacher/Teachers';
import Students from '../student/Students';
import Contacts from '../contact/Contacts';
import EditContact from '../contact/EditContact';
import Gallery from '../gallery/Gallery';
import SingleGallery from '../gallery/SingleGallery';
import Post from '../posts/Post';
import PostDetail from '../posts/PostDetail';
import PostPerUser from '../posts/PostPerUser';
import Test from '../test/Test';
import NotFound from '../NotFound';
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
                  <Link className="nav-link text-white mr-5" to="/contacts">
                    Contact
                  </Link>
                </Nav>
                <Nav>
                  <Link className="nav-link text-white mr-5" to="/gallery">
                    Gallery
                  </Link>
                </Nav>
                <Nav>
                  <Link className="nav-link text-white" to="/posts">
                    Posts
                  </Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/teachers" component={Teachers} />
          <Route path="/students" component={Students} />
          <Route exact path="/contacts" component={Contacts} />
          <Route path="/contacts/edit/:id" component={EditContact} />
          <Route exact path="/gallery" component={Gallery} />
          <Route path="/gallery/:id" component={SingleGallery} />
          <Route path="/posts?" component={PostPerUser} />
          <Route exact path="/posts" component={Post} />
          <Route exact path="/posts/:id" component={PostDetail} />
          <Route exact path="/test" component={Test} />

          <Route component={NotFound} />

          {/* <PostPerUser /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default Header;
