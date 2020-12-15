import React, { Component } from 'react';

class Test extends Component {
  componentDidMount() {
    console.log('ComponentDidMount');
  }
  componentWillMount() {
    console.log('ComponentWillMount');
  }

  render() {
    return (
      <div>
        <h1 className="display-2 text-center">Test Component</h1>
      </div>
    );
  }
}

export default Test;
