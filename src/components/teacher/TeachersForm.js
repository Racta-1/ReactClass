import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'react-uuid';
import TextInputGroup from '../layouts/TextInputGroup';

class TeachersForm extends Component {
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

    const newTeacher = {
      id: uuid(),
      name, // same as name:name,
      email, //same as email:email,
      phone, //same as phone:phone,
    };
    dispatch({ type: 'ADD_TEACHER', payload: newTeacher });

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
            <div className="card bg-light mt-4">
              <h2 className="card-header"> Add Teacher</h2>
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
                    placeholder="Enter Teacher Name"
                    onInputChange={this.onInputChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Enter Teacher Email"
                    onInputChange={this.onInputChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone Number"
                    id="phone"
                    name="phone"
                    value={phone}
                    placeholder="Enter Teacher Phone Number"
                    onInputChange={this.onInputChange}
                    error={errors.phone}
                  />
                  <input
                    className="form-group btn btn-danger btn-block"
                    type="submit"
                    value="Add Teacher"
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

export default TeachersForm;
