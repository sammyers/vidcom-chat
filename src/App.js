import React from 'react';
import { Grid, Header, Container, Divider } from 'semantic-ui-react';

import ContactList from './ui/ContactList';

import './App.css';

const App = () => (
  <Container fluid style={{ height: 'calc(100vh + 1rem)' }}>
    <Grid divided style={{ height: '100%' }}>
      <Grid.Column width={4} style={{ paddingRight: 0 }}>
        <Header size='large' textAlign='center' style={{ marginTop: '0.5rem' }}>
          Contacts
        </Header>
        <Divider style={{ marginBottom: 0 }} />
        <ContactList />
      </Grid.Column>
      <Grid.Column width={12}>
        
      </Grid.Column>
    </Grid>
  </Container>
);

export default App;
