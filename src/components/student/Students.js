import React, { Component } from 'react';
import { Consumer } from '../../context';
import Student from './Student';

class Students extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { students } = value;
          return (
            <React.Fragment>
              <h1 className="mt-5 mb-3">List of Students</h1>
              {students.map((stu) => (
                <Student key={stu.id} student={stu} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Students;
