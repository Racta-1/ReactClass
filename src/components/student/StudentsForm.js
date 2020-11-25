import React, { Component } from 'react';
import uuid from 'react-uuid';
import { Consumer } from '../../context';
import TextInputGroup from '../layouts/TextInputGroup';

class StudentsForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };

  onFormSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    // Check for Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name  is required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email  is required' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone  is required' } });
      return;
    } else if (phone.length < 11) {
      this.setState({ errors: { phone: 'Phone  is invalid' } });
      return;
    }

    const newStudent = {
      id: uuid(),
      name, // same as name:name,
      email, //same as email:email,
      phone, //same as phone:phone,
    };
    dispatch({ type: 'ADD_STUDENT', payload: newStudent });

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {},
    });
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card bg-light mt-5">
              <h2 className="card-header"> Add Student</h2>
              <form
                className="form-row card-body"
                onSubmit={this.onFormSubmit.bind(this, dispatch)}
              >
                <div className="col-12">
                  <TextInputGroup
                    label="Name"
                    id="name"
                    name="name"
                    value={name}
                    placeholder="Enter Student Name"
                    onInputChange={this.onInputChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Enter Student Email"
                    onInputChange={this.onInputChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone Number"
                    id="phone"
                    name="phone"
                    value={phone}
                    placeholder="Enter Student Phone Number"
                    onInputChange={this.onInputChange}
                    error={errors.phone}
                  />
                  <input
                    className="form-group btn btn-info btn-block"
                    type="submit"
                    value="Add Student"
                  />
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default StudentsForm;
