import React from 'react';
import PropTypes from "prop-types";
import css from 'components/ContactList.module.css';


export default function ContactList({ contacts, onContactdelete }) {
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li className={css.item} key={id}>
        <Contact
          name={name}
          number={number}
          onContactdelete={onContactdelete}
          idContact={id}
        />
      </li>
    );
      
    
  </ul>
}