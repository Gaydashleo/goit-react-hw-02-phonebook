import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';


import { Container, Section, Titleh1, Titleh2 } from './App.styled';

export class App extends React.Component {
    state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

// Додаємо контакт у список
  addContact = ({ name, number }) => {
    const normalizedFind = name.toLowerCase();
    const findName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === normalizedFind
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }

    const findNumber = this.state.contacts.find(
      contact => contact.number === number
    );
    if (findNumber) {
      return alert(`This phone number is already in use.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [{ name, number, id: nanoid() }, ...contacts],
    }));
};

render() {

  return (
    <Container>
      <Section title="Phonebook">
        <Titleh1>Phonebook</Titleh1>
        <ContactForm onSubmit={this.addContact}/>
      </Section>
        <Section title="Contacts">
        <Titleh2>Contacts</Titleh2>
        </Section>
     </Container>
  );

  }
}