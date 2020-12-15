import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Jumbotron } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

class PostPerUser extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts?userId=8`)
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <Jumbotron className="bg-danger p-5">
        <Container fluid>
          <h1 className="text-white text-center mb-5">Post of User</h1>
          <hr />
          <Row>
            {posts.map((post) => (
              <Col key={post.id} lg={4} xs={6} className="card shadow">
                <div className="card-header">
                  <h1>{post.title}</h1>
                </div>
                <div className="card-body">
                  <p>{post.body}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default PostPerUser;
