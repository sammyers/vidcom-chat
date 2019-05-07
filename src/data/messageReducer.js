import _ from 'lodash';

import { types } from './actions';

function messageReducer(state = {}, { type, payload }) {
  switch (type) {
    case types.LOAD_MESSAGES:
      return {
        ...state,
        [payload.chatId]: payload.messages,
      };

    case types.ADD_MESSAGE:
      return {
        ...state,
        [payload.chatId]: [
          ...state[payload.chatId],
          _.pick(payload, ['sender', 'text', 'timestamp']),
        ],
      };

    default:
      return state;
  }
}

export default messageReducer;
