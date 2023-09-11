import React from 'react';
import { useSelector } from 'react-redux';
import ContactFrom from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { Container, Title, SubTitle } from './App.styled';
import { selectIsLoading } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactFrom />
      <SubTitle>Contacts</SubTitle>
      {isLoading && <Loader/>}
      <Filter />
      <ContactList />
    </Container>
  );
};
