import { combineReducers } from 'redux';

import messageReducer from './messageReducer';
import chatReducer from './chatReducer';
import contactReducer from './contactReducer';

export default combineReducers({
  chat: chatReducer,
  messages: messageReducer,
  contacts: contactReducer,
});
