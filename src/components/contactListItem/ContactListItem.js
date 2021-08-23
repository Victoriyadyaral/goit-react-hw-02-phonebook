import React from 'react';
import PropTypes from 'prop-types';
import { ImCross, ImRadioChecked2 } from "react-icons/im";
import s from "./ContactListItem.module.css";

const ContactListItem = ({ name, number, id, onDeleteContact }) => {
    return (
            <li
            className={s.contacts__item}
            >
            <ImRadioChecked2 color="rgb(11, 100, 11)" size="10px"/> {name}:  {number}
            
            <button
            className={s.button}
            type="button"
                onClick={() => onDeleteContact(id)}
            >
             Delete <ImCross color="rgb(190, 12, 27)" size="15px"/>
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