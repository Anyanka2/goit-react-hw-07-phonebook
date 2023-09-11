import React from 'react';
import { List, Button, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsThunk } from 'redux/contactsThunk';

const ContactList = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filtered = useSelector(state => state.filter);

  const filteredContacts = contacts?.filter(
    contact =>
      contact?.name?.toLowerCase().includes(filtered.toLowerCase()) ||
      contact?.number?.includes(filtered)
  );

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name + ' : ' + number}
          {
            <Button
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContactsThunk(id))}
            >
              delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
