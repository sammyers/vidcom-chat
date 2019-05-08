import React from 'react';
import moment from 'moment';
import { Comment, Message } from 'semantic-ui-react';

const ChatMessage = ({ sent, name, photo, text, timestamp }) => (
  <Comment style={{ alignSelf: sent ? 'flex-end' : 'flex-start' }}>
    {!sent && <Comment.Avatar src={photo} />}
    <Comment.Content
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: sent ? 'flex-end' : 'flex-start',
      }}
    >
      <Comment.Content
        style={{
          display: 'flex',
          justifyContent: sent ? 'flex-end' : 'flex-start'
        }}
      >
        <Comment.Author>{sent ? 'You' : name}</Comment.Author>
        <Comment.Metadata>
          <div>{moment(timestamp).calendar()}</div>
        </Comment.Metadata>
      </Comment.Content>
      <Message compact info={!sent} style={{ padding: '0.5rem' }}>
        <Comment.Text>{text}</Comment.Text>
      </Message>
    </Comment.Content>
  </Comment>
);

export default ChatMessage;
