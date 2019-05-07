import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { getContacts } from '../data/selectors';
import { Feed, Divider } from 'semantic-ui-react';
import Contact from './Contact';

const ContactList = ({ contacts }) => (
  <Feed style={{ marginTop: 0 }}>
    {contacts.map((contact, idx) => (
      <Fragment>
        {idx > 0 && <Divider style={{ margin: 0 }} />}
        <Contact key={contact.id} {...contact} />
      </Fragment>
    ))}
  </Feed>
);

export default connect(
  state => ({
    contacts: getContacts(state),
  })
)(ContactList);
