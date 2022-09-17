import React from "react";
import PropTypes from "prop-types";
import css from "./ContactList.module.css";



const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.list}>
    {contacts.map((contact) => (
      <li className={css.item} key={contact.id}>
        {contact.name + ":" + contact.number}
        {<button className={css.button}
          type="button"
          name="delete"
          onClick={() => onDeleteContact(contact.id)}>
          Delete
        </button>
        }
      </li>
    ))}
  </ul>
);
  
ContactList.propTypes = {
   contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
   })),
  onDeleteContact:PropTypes.func.isRequired,
}
export default ContactList;