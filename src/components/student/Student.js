import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Consumer } from '../../context';

class Student extends Component {
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_STUDENT', payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.student;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body bg-info">
              <h1 className="card-title text-white">
                {name}
                <i
                  style={{ cursor: 'pointer', color: 'white', float: 'right' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                >
                  <FaTimes />
                </i>
              </h1>
              <ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
              </ul>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Student;
