import { types } from './actions';

const initialState = {
  messageValue: '',
  selectedConversation: null,
};

function chatReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.EDIT_MESSAGE_FIELD:
      return {
        ...state,
        messageValue: payload.value,
      };

    case types.SELECT_CONVERSATION:
      return {
        ...state,
        selectedConversation: payload.chatId,
      };

    default:
      return state;
  }
}

export default chatReducer;
