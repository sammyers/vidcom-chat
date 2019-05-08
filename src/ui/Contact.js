import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Feed } from 'semantic-ui-react';

import { getLastMessage, isContactSelected } from '../data/selectors';
import { selectConversation } from '../data/actions';

const Contact = ({ name, photo, lastMessage, selected, handleClick }) => (
  <Feed.Event
    className='contact'
    style={{ backgroundColor: selected ? 'gainsboro' : 'white' }}
    onClick={handleClick}
  >
    <Feed.Label image={photo} style={{ margin: 'auto' }} />
    <Feed.Content style={{ overflow: 'hidden' }}>
      <Feed.Summary style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Feed.User>{name}</Feed.User>
        <Feed.Date>{moment(lastMessage.timestamp).format('h:mmA')}</Feed.Date>
      </Feed.Summary>
      <Feed.Extra className='message-preview'>
        {lastMessage.text}
      </Feed.Extra>
    </Feed.Content>
  </Feed.Event>
);

export default connect(
  (state, { id }) => ({
    lastMessage: getLastMessage(state, id),
    selected: isContactSelected(state, id),
  }),
  (dispatch, { id }) => ({
    handleClick: () => dispatch(selectConversation(id)),
  }),
)(Contact);
