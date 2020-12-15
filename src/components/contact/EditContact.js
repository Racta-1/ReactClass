import axios from 'axios';
import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layouts/TextInputGroup';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
  }

  onFormSubmit = async (dispatch, e) => {
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
    const updateContact = {
      name,
      email,
      phone,
    };
    const { id } = this.props.match.params;
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updateContact
    );

    dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {},
    });
    this.props.history.push('/contacts'); //Redirecting after form submit
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
            <div className="row">
              <div className="card bg-light mt-5 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3">
                <h2 className="card-header"> Edit Contact</h2>
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
                      placeholder="Enter Contact Name"
                      onInputChange={this.onInputChange}
                      error={errors.name}
                    />
                    <TextInputGroup
                      label="Email"
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      placeholder="Enter Contact Email"
                      onInputChange={this.onInputChange}
                      error={errors.email}
                    />
                    <TextInputGroup
                      label="Phone Number"
                      id="phone"
                      name="phone"
                      value={phone}
                      placeholder="Enter Contact Phone Number"
                      onInputChange={this.onInputChange}
                      error={errors.phone}
                    />
                    <input
                      className="form-group btn bg-success btn-block"
                      type="submit"
                      value="Edit Contact"
                    />
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
