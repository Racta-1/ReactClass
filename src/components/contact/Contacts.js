import React, { Component } from 'react';
import Contact from './Contact';
import ContactForm from './ContactForm';
import { Consumer } from '../../context';

class Teachers extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3">
              <h1 className="mt-5 mb-3">List of Contacts</h1>
              {contacts.map((cont) => (
                <Contact key={cont.id} contact={cont} />
              ))}
              <ContactForm />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Teachers;
