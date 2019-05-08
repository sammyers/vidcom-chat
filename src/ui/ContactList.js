import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Feed, Divider, Container, Header } from 'semantic-ui-react';

import { getContacts } from '../data/selectors';
import Contact from './Contact';

const ContactList = ({ contacts }) => (
  <Container style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <Header size='medium' textAlign='center' style={{ marginTop: '1rem' }}>
      Contacts
    </Header>
    <Divider style={{ marginTop: 0, marginBottom: '-1px' }} />
    <Feed style={{ marginTop: 0, marginBottom: 0, overflow: 'auto' }}>
      {contacts.map((contact, idx) => (
        <Fragment key={idx}>
          {idx > 0 && <Divider key={`div_${idx}`} style={{ margin: 0 }} />}
          <Contact key={contact.id} {...contact} />
        </Fragment>
      ))}
    </Feed>
    <Divider style={{ margin: 0 }} />
  </Container>
);

export default connect(
  state => ({
    contacts: getContacts(state),
  })
)(ContactList);
