import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Feed } from 'semantic-ui-react';

import { getLastMessage } from '../data/selectors';

const Contact = ({ name, photo, lastMessage }) => (
  <Feed.Event style={{ padding: '1rem' }}>
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
  }),
)(Contact);
