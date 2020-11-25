import React, { Component } from 'react';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap';
import Header from './components/layouts/Header';

class App extends Component {
  render() {
    return (
      <Provider>
        <Header />
      </Provider>
    );
  }
}

export default App;
