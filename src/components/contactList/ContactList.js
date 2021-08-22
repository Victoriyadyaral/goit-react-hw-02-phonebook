import React from 'react';

import ContactListItem from '../contactListItem/ContactListItem';

const ContactList = ({ contacts }) => (
  <ul className="contacts">
          {contacts.map(({ name, number, id }) => (
            <ContactListItem
            key={id}
            name={name}
            number={number}
          />
        ))}
  </ul>
);

export default ContactList;