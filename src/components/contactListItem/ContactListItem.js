import React from 'react';
import PropTypes from 'prop-types';
import s from "./ContactListItem.module.css";

const ContactListItem = ({ name, number, id, onDeleteContact }) => {
    return (
            <li
            className={s.contacts__item}
            >
            {name}:  {number}
            
            <button
            className={s.button}
            type="button"
                onClick={() => onDeleteContact(id)}
            >
             Delete
            </button>
            </li>
    )
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactListItem;