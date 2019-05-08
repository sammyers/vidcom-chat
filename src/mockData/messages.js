import _ from 'lodash';
import moment from 'moment';

export const createMessages = messages => {
  const latest = moment().subtract({ hours: _.random(4), minutes: _.random(59) });
  const datedMessages = [];
  const reversed = _.reverse(_.slice(messages));
  for (let message of reversed) {
    console.log('latest', latest.format());
    const timestamp = moment(latest.subtract(_.random(59), 'minutes'));
    console.log('new', timestamp.format());
    datedMessages.unshift({ ...message, timestamp });
  }
  return datedMessages;
};

export const conversations = [
  [
    {
      text: 'Yo check this out',
      sent: false,
    },
    {
      text: 'https://www.youtube.com/watch?v=0GIwTG8V-Ko',
      sent: false,
    },
    {
      text: "That's pretty dope",
      sent: true,
    },
    {
      text: "Think you're gonna do pizza tonight? I could get in on that",
      sent: false,
    },
    {
      text: "Yeah I think I'll be riding the strugglebus for a while on this video",
      sent: true,
    },
    {
      text: 'Cool. Can I get a medium with provolone and parm',
      sent: false,
    },
    {
      text: 'With an extra marinara',
      sent: false,
    },
  ],
  [
    {
      text: 'Can you pick up some more tortillas?',
      sent: false,
    }
  ],
  [
    {
      text: 'Hey wanna play Titanfall',
      sent: true,
    }
  ],
  [
    {
      text: 'Are you doing coconut thai? 🙂',
      sent: false,
    }
  ],
  [
    {
      text: 'I want my creatures to die though',
      sent: false,
    }
  ],
  [
    {
      text: 'ok I thought you were gonna use a helicopter or something',
      sent: false,
    }
  ],
  [
    {
      text: "Quick, name three things that aren't me",
      sent: false,
    }
  ],
  [
    {
      text: "I'll have a chicken bacon ranch",
      sent: false,
    }
  ],
];
