import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Jumbotron } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

class SingleGallery extends Component {
  state = {
    photo: {},
  };

  componentDidMount() {
    // console.log(this.state);
    axios
      .get(
        `http://jsonplaceholder.typicode.com/photos/${this.props.match.params.id}`
      )
      .then((response) => {
        this.setState({
          photo: response.data,
        });
        // console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { photo } = this.state;
    return (
      <Jumbotron className="bg-success p-5">
        <Container fluid>
          <h1 className="text-white text-center mb-5">Gallery Images</h1>
          <hr />
          <Row>
            <Col key={photo.id} lg={4} xs={6} className="card shadow">
              <div className="card-header">
                <h1>{photo.title}</h1>
              </div>
              <div className="card-img">
                <img
                  src={photo.thumbnailUrl}
                  className="img-fluid"
                  alt="Background"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default SingleGallery;
