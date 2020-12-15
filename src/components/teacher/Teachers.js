import React, { Component } from 'react';
import Teacher from './Teacher';
import TeachersForm from './TeachersForm';
import { Consumer } from '../../context';

class Teachers extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { teachers } = value;
          return (
            <div className="col-sm-8 offset-2 col-lg-6 offset-lg-3">
              <h1 className="mt-5 mb-3">List of Teachers</h1>
              {teachers.map((teach) => (
                <Teacher key={teach.id} teacher={teach} />
              ))}
              <TeachersForm />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Teachers;
