import React from 'react';

const ContactListItem = ({ name, number, id }) => {
    return (
            <li
              key={id}
              className="contacts__item"
            >
              {name}:  {number}
            </li>
)};

export default ContactListItem;