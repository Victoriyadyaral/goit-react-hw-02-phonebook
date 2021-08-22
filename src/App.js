//import './App.css';
import React, { Component } from 'react';

import Container from './components/container/Container';
import Form from './components/form/Form'

class App extends Component {
  state = {
  contacts: []
  }

  // formSubmitHandler = (contact) => {
  //   console.log(contact)
  //  };

  addContact = (contact) => {
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    console.log(this.state.contacts)
  };

  deleteContact = () => { };
  
  render() {
    
    return (
      <Container>
        <h2>Phonebook</h2>
        <Form onSubmit={this.addContact}/>
        <h2>Contacts</h2>
        <ul className="contacts">
          {this.state.contacts.map(({ name, number, id }) => (
            <li
              key={id}
              className="contacts__item"
            >
              {name}:  {number}
            </li>
          ))}
  </ul>
     </Container>
    );
  }
}

export default App;
