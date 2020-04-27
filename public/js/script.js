'use strict';

const socket = io();

const outputYou = document.querySelector('.output-you');
const outputBot = document.querySelector('.output-bot');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const startMicro = () => {
  recognition.start();
};

const stopMicro = () => {
  recognition.stop();
};

document.querySelector('button').addEventListener('click', () => {
  // recognition.start();
  startMicro();
});

document.querySelector('pause').addEventListener('click', () => {
  // recognition.start();
  stopMicro();
});

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

recognition.addEventListener('speechend', () => {
  // recognition.stop();
});

recognition.addEventListener('error', (e) => {
  outputBot.textContent = 'Error: ' + e.error;
});

recognition.addEventListener('nomatch', (e) => { // extra
  startMicro();
});


function synthVoice(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  synth.speak(utterance);
}

socket.on('bot reply', function(replyText) {
  synthVoice(replyText);

  if(replyText == '') replyText = '(No answer...)';
  outputBot.textContent = replyText;
});
