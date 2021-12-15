const cron = require('node-cron');
// Require the necessary discord.js classes
const request = require('request');
const { Client, Intents, ClientUser } = require('discord.js');
const { token } = require('./config.json');


cron.schedule('* * * * *', function() {

  request('https://api.bombcrypto.io/ccu', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.message.ccu);
    if (body.message.ccu == 7509){
        // Create a new client instance
      const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

      // When the client is ready, run this code (only once)
      client.on('ready', () => {
          client.user.setStatus('dnd');
          client.user.setActivity('OFFLINE', { type: 'PLAYING' });
          console.log('OFFLINE!');
      });
      // Login to Discord with your client's token
      client.login(token);

    } else {

          // Create a new client instance
      const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

      // When the client is ready, run this code (only once)
      client.on('ready', () => {
          client.user.setStatus('avaible');
          client.user.setActivity('ONLINE', { type: 'PLAYING' });
          console.log('ONLINE!');
      });
      // Login to Discord with your client's token
      client.login(token);
    }
  });

});