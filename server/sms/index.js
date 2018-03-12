// Twilio Credentials
const accountSid = 'ACae436e24e6bb34aa1874fb143c7c4919';
const authToken = '35f3b70afbd2f0ec1d1638753c4e266b';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        to: '+972502555605',
        from: '+972502555605',
        body: 'hello gilad',
    })
    .then(message => console.log(message.sid));