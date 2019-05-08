import React from 'react';
import { Grid, Container } from 'semantic-ui-react';

import ContactList from './ui/ContactList';
import ChatConversation from './ui/ChatConversation';

import './App.css';

const App = () => (
  <Container fluid style={{ height: 'calc(100vh + 1rem)' }}>
    <Grid divided style={{ height: '100%' }}>
      <Grid.Column
        width={4}
        style={{ paddingRight: 0, paddingBottom: 0, height: '100%' }}
      >
        <ContactList />
      </Grid.Column>
      <Grid.Column
        width={12}
        style={{ paddingLeft: 0, paddingBottom: 0, height: '100%' }}
      >
        <ChatConversation />
      </Grid.Column>
    </Grid>
  </Container>
);

export default App;
