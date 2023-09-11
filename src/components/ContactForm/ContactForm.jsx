import React, { useEffect, useState } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk, addContactsThunk } from 'redux/contactsThunk';
import Notiflix from 'notiflix';

const ContactFrom = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const [contactName, setContactName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const reset = () => {
    setContactName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setContactName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = event => {
    const { name, phone } = event.target;
    const contact = {
      name: name.value,
      phone: phone.value,
    };
    event.preventDefault();

    const isDuplicateContact = 
      contacts.some(
        contact => contact.name.toLowerCase() === contactName.toLowerCase() ||
          phone === contact.phone
      );
    if (isDuplicateContact) {
      return Notiflix.Notify.warning(
        `Contact "${contactName}" or ${phone} is already in your contacts list!`
      )
    } 
      dispatch(addContactsThunk(contact));
      reset();
    
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={contactName}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactFrom;
