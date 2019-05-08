import moment from 'moment';

import { getSelectedConversation, getMessageValue } from './selectors';

export const types = {
  ADD_CONTACT: 'ADD_CONTACT',
  LOAD_MESSAGES: 'LOAD_MESSAGES',
  ADD_MESSAGE: 'ADD_MESSAGE',
  SELECT_CONVERSATION: 'SELECT_CONVERSATION',
  EDIT_MESSAGE_FIELD: 'EDIT_MESSAGE_FIELD',
};

export const addContact = (id, name, photo) => ({
  type: types.ADD_CONTACT,
  payload: { id, name, photo },
});

export const loadMessages = (chatId, messages) => ({
  type: types.LOAD_MESSAGES,
  payload: { chatId, messages },
});

export const addMessage = (chatId, sent, text, timestamp) => ({
  type: types.ADD_MESSAGE,
  payload: { chatId, sent, text, timestamp },
});

export const selectConversation = (chatId) => ({
  type: types.SELECT_CONVERSATION,
  payload: { chatId },
});

export const editMessageField = (value) => ({
  type: types.EDIT_MESSAGE_FIELD,
  payload: { value },
});

export const sendMessage = () => (dispatch, getState) => {
  const state = getState();
  dispatch(addMessage(
    getSelectedConversation(state),
    true,
    getMessageValue(state),
    moment(),
  ));
  dispatch(editMessageField(''));
};
