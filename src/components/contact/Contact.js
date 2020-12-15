import React, { Component } from 'react';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Teacher extends Component {
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body bg-success ">
              <h1 className="card-title text-white">
                {name}
                <i
                  style={{ cursor: 'pointer', color: 'white', float: 'right' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                >
                  <FaTimes />
                </i>
                <Link to={`/contacts/edit/${id}`}>
                  <i
                    style={{
                      cursor: 'pointer',
                      color: 'black',
                      float: 'right',
                      marginRight: '1rem',
                    }}
                  >
                    <FaPencilAlt />
                  </i>
                </Link>
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

export default Teacher;
