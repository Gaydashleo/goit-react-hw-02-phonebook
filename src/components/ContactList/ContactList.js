import React from 'react';
import PropTypes from "prop-types";
import css from 'components/ContactList.module.css';


export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <contacts
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
              contactId={id}
            />
            <button className={css.button}
              type="button"
              name="delete"
              onClick={() => onDeleteContact(id)}>
              Delete
            </button>

          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {

   onDeleteContact: PropTypes.func.isRequired,
}