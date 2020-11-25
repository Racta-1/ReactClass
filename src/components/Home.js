import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Container fluid className="mt-5 bg-info p-5">
        <Jumbotron className="shadow">
          <h1 className="text-dark text-center">
            Web App to display list of students and teachers
          </h1>
        </Jumbotron>
      </Container>
    );
  }
}

export default Home;
