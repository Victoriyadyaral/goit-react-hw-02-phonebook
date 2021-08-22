import React from 'react';
import PropTypes from 'prop-types';
import s from "./ContactList.module.css";

import ContactListItem from '../contactListItem/ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={s.contactList}>
        {contacts.map(({ name, number, id }) => (
            <ContactListItem
                key={id}
                id={id}
                name={name}
                number={number}
                onDeleteContact={onDeleteContact}
            />
        ))}
  </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.array,
}

export default ContactList;