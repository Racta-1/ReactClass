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
            <React.Fragment>
              <h1 className="mt-5 mb-3">List of Teachers</h1>
              {teachers.map((teach) => (
                <Teacher key={teach.id} teacher={teach} />
              ))}
              <TeachersForm />
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Teachers;
