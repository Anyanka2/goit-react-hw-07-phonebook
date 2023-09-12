import React from 'react';
import ContactFrom from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Container, Title, SubTitle } from './App.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactFrom />
      <SubTitle>Contacts</SubTitle>
      {contacts.length > 0 && <Filter />}
      {!isLoading && <Loader />}
      <ContactList />
    </Container>
  );
};
