import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Jumbotron } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
// import background from '../../background.jpg';
// import { Consumer } from '../../context';

class Gallery extends Component {
  state = {
    photos: [],
  };

  componentDidMount() {
    // console.log(this.state);
    axios
      .get('http://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        this.setState({
          photos: response.data.slice(0, 50),
        });
        // console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { photos } = this.state;
    return (
      <Jumbotron className="bg-success p-5">
        <Container fluid>
          <h1 className="text-white text-center mb-5">Gallery Image</h1>
          <Row>
            {photos.map((pho) => (
              <Col key={pho.id} lg={4} xs={6} className="card shadow">
                <div className="card-header">
                  <h1>
                    <Link to={'/gallery/' + pho.id} class="nav-link text-dark">
                      {pho.title}
                    </Link>
                  </h1>
                </div>
                <div className="card-img">
                  <img
                    src={pho.thumbnailUrl}
                    className="img-fluid"
                    alt="Background"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Gallery;
