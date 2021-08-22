//import './App.css';
import React, { Component } from 'react';

import Container from './components/container/Container';
import Form from './components/form/Form';
import Filter from './components/filter/Filter';


class App extends Component {
  state = {
     contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: ''
  }

  addContact = (contact) => {
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = () => { };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  
  render() {
    const visibleContacts = this.getVisibleContacts();
    
    return (
      <Container>
        <h2>Phonebook</h2>
        <Form onSubmit={this.addContact}/>
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ul className="contacts">
          {visibleContacts.map(({ name, number, id }) => (
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
