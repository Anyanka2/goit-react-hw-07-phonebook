import React from 'react';
import { List, Button, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsThunk } from 'redux/contactsThunk';
import { selectFilteredContacts } from 'redux/selectors';
//import { Loader } from 'components/Loader/Loader';

const ContactList = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <List>
        {filteredContacts.map(({ id, name, phone }) => (
          <Item key={id}>
            {name + ' : ' + phone}
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
    </>
  );
};

export default ContactList;
