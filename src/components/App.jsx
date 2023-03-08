import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts') ?? [])
  });

  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])
  
  const addContact = contact => {
    const names = contacts.map(contact =>
      contact.name.toLowerCase()
    );
    if (names.includes(contact.name.toLowerCase())) {
      return alert(`${contact.name} is already in contacts`);
    }

    setContacts([contact, ...contacts]);
  };

  const filterContacts = () => {
    const searchedName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchedName)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  
    const filteredContacts = filterContacts();

    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact}></ContactForm>

        <h2>Contacts</h2>
        <Filter onSearch={e => setFilter(e.target.value)} value={filter}></Filter>
        <ContactList
          filteredContacts={filteredContacts}
          onDelete={deleteContact}
        ></ContactList>

        <GlobalStyle></GlobalStyle>
      </Layout>
    );
}
