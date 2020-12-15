import React, { Component } from 'react';
import { Consumer } from '../../context';
import Student from './Student';
import StudentsForm from './StudentsForm';

class Students extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { students } = value;
          return (
            <div className="col-sm-8 offset-2 col-lg-6 offset-lg-3">
              <h1 className="mt-5 mb-3">List of Students</h1>
              {students.map((stu) => (
                <Student key={stu.id} student={stu} />
              ))}
              <StudentsForm />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Students;
