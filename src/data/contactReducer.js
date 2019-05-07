import { types } from './actions';

function contactReducer(state = {}, { type, payload }) {
  switch (type) {
    case types.ADD_CONTACT:
      return {
        ...state,
        [payload.id]: payload,
      };

    default:
      return state;
  }
}

export default contactReducer;
