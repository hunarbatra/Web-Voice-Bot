'use strict';

// require('dotenv').config()
const APIAI_SESSION_ID = "c685ea9a-ea08-d06b-be57-27ab2580ce8c";
const APIAI_TOKEN = "83a2c06596e741adb2c08d7e154e0135";

// var apiai = require('apiai');
//var APIAI_TOKEN =apiai("83a2c06596e741adb2c08d7e154e0135");
// const APIAI_SESSION_ID = "c685ea9a-ea08-d06b-be57-27ab2580ce8c";

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views')); // html
app.use(express.static(__dirname + '/public')); // js, css, images

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

const io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('a user connected');
});

 const apiai = require('apiai')(APIAI_TOKEN);

// Web UI
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

io.on('connection', function(socket) {
  socket.on('chat message', (text) => {
    console.log('Message: ' + text);

    // Get a reply from API.ai

    let apiaiReq = apiai.textRequest(text, {
      sessionId: APIAI_SESSION_ID
    });

    apiaiReq.on('response', (response) => {
      let aiText = response.result.fulfillment.speech;
      console.log('Bot reply: ' + aiText);
      socket.emit('bot reply', aiText);
    });

    apiaiReq.on('error', (error) => {
      console.log(error);
    });

    apiaiReq.end();

  });
});
