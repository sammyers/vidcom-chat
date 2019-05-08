import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getSelectedMessages, getSelectedContactName, getSelectedContactPhoto, getMessageValue } from '../data/selectors';
import { Header, Comment, Divider, Container, Input } from 'semantic-ui-react';

import ChatMessage from './ChatMessage';
import { editMessageField, sendMessage } from '../data/actions';

const ChatConversation = ({ messages, name, photo, messageField, handleInput, handleSend }) => (
  <Container style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    {messages ?
      <Fragment>
        <Header size='medium' textAlign='center' style={{ marginTop: '1rem' }}>
          Conversation with {name}
        </Header>
        <Divider style={{ marginTop: 0, marginBottom: '-1px' }} />
        <Comment.Group
          style={{
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            overflow: 'auto',
            margin: 0,
            maxWidth: '100%',
            padding: '1rem',
          }}
        >
          {messages.map((message, idx) => (
            <ChatMessage
              key={idx}
              name={name}
              photo={message.sent ? undefined : photo}
              {...message}
            />
          ))}
        </Comment.Group>
        <Divider style={{ margin: 0 }} />
        <Input
          value={messageField}
          onChange={e => handleInput(e.target.value)}
          action={{
            color: 'teal',
            labelPosition: 'right',
            icon: 'send',
            content: 'Send',
            onClick: handleSend,
          }}
          style={{ margin: '1rem' }}
        />
      </Fragment>
      :
      <Header textAlign='center' size='large' style={{ marginTop: '40%' }}>
        Select a conversation to start chatting!
      </Header>
    }
  </Container>
);

export default connect(
  state => ({
    messages: getSelectedMessages(state),
    name: getSelectedContactName(state),
    photo: getSelectedContactPhoto(state),
    messageField: getMessageValue(state),
  }),
  dispatch => ({
    handleInput: value => dispatch(editMessageField(value)),
    handleSend: () => dispatch(sendMessage()),
  }),
)(ChatConversation);
