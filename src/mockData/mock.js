import _ from 'lodash';

import contacts from './contacts';
import { createMessages, conversations } from './messages';

import { addContact, loadMessages } from '../data/actions';

const createMockData = dispatch => {
  for (const { id, name, photo } of contacts) {
    dispatch(addContact(id, name, photo));
  }
  for (const [{ id }, messages] of _.zip(contacts, conversations)) {
    dispatch(loadMessages(id, createMessages(messages)));
  }
};

export default createMockData;
