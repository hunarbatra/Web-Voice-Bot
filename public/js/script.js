'use strict';

const socket = io();

const outputYou = document.querySelector('.output-you');
const outputBot = document.querySelector('.output-bot');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

document.querySelector('button').addEventListener('click', () => {
    recognition.start();
}); 

/* document.getElementById('pause').addEventListener('click', () => {
  recognition.stop();
}); */

recognition.addEventListener('speechstart', () => {
  console.log('Speech has been detected.');
});

recognition.addEventListener('result', (e) => {
  console.log('Result has been detected.');

  let last = e.results.length - 1;
  let text = e.results[last][0].transcript;

  outputYou.textContent = text;
  console.log('Confidence: ' + e.results[0][0].confidence);

  socket.emit('chat message', text);
});

recognition.addEventListener('nomatch', (e) => {
  recognition.start();
});

recognition.addEventListener('speechend', () => {
  //recognition.stop();
}); 

recognition.addEventListener('error', (e) => {
  outputBot.textContent = 'Error: ' + e.error;
});

function synthVoice(text, callback) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  synth.speak(utterance);
  utterance.onend = function(event) {
    recognition.start();
    callback('ok');
  }
}

socket.on('bot reply', function(replyText) {
  synthVoice(replyText, function(data) {
    recognition.start();
  });

  if(replyText == '') replyText = '(No answer...)';
  outputBot.textContent = replyText;
});