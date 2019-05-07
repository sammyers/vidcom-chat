import _ from 'lodash';

export const getMessages = (state, chatId) => state.messages[chatId];

export const getLastMessage = (state, chatId) => _.last(getMessages(state, chatId));

export const getContacts = state => _.orderBy(
  state.contacts,
  [contact => getLastMessage(state, contact.id).timestamp],
  ['desc'],
);

export const getSelectedConversation = state => state.chat.selectedConversation;

export const getMessageValue = state => state.chat.messageValue;

export const getContactPhoto = (state, userId) => _.get(state.contacts, [userId, 'photo']);
