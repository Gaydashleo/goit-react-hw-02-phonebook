import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

import Filter from 'components/Filter/Filter'
import css from 'components/App.module.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: "",
    };

  addContact = ({ contacts }) => {
    const searchName = this.state.contacts
    .map((cont)=>cont.name).includes(contacts.name)
    
    if (searchName) {
      alert(`${contacts.name} is already in contacts list`);
    } else if (contacts.name.length === 0) {
      alert("Field must be filled!");
    } else {
      const contact = {
        ...contacts,
        id: nanoid(),
      }
      this.setState(({ prevState }) => ({
        contacts: [ ...prevState.contacts, contact],
      }));
    }
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  filteredContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase()));
  };

    deleteContact = contactId => {
   this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const addFilteredContact = this.filteredContact();
    

    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
      
        <ContactForm onContactAdd={this.contactAdd} />
        
        <h2 className={css.subtitle}>Contacts</h2>
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        {addFilteredContact.length > 0 ? (
          <ContactList
            contacts={addFilteredContact}
            onDeleteContact={this.deleteContact} />)
          : (<p>Contact list is empty.</p>)}
{/*       
        {addFilteredContact.length > 0 && (

        )} */}
      </div>
    );
  }
  }
