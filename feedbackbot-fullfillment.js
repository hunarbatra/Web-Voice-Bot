'use strict';

const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements


exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  // let sessionID = request.body.session;
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
  // console.log(`Session id = ` + sessionID);
  /* function welcome(agent) {
    agent.add(`Your session id is :` + sessionID); //: `+ sessionID);
  } */

  let total_sum = 0;

  function get_name(agent) {
    let name = agent.parameters.name;
    db.collection('feedback').add({ 
        studentName : name
    });
  }

   function get_dept(agent) {
    let dept = agent.parameters.department;
    db.collection('feedback').add({ 
        studentdepartment : dept
    });
  } 

    function get_year(agent) {
    let year = agent.parameters.ordinal;
    db.collection('feedback').add({ 
        studentYear : year
    });
  }

    function get_subject(agent) {
    let teacher = agent.parameters.name;
    db.collection('feedback').add({ 
        teacherName : teacher
    });
  }

    function q1(agent) {
    let sub = agent.parameters.subject;
    db.collection('feedback').add({ 
        subject : sub
    });
  }

  function q2(agent) {
    let q1 = agent.parameters.number;
    if(q1 == 'one') q1 = 1;
    else if(q1 == 'two') q1 = 2;
    else if(q1 == 'three') q1 = 3;
    else if(q1 == 'four') q1 = 4;
    else if(q1 == 'five') q1 = 5;
    else if(q1 == 'tu') q1 = 2;
    db.collection('feedback').add({ 
        ques1 : q1
    });
    total_sum += q1;
  }

  function q3(agent) {
    let q2 = agent.parameters.number;
    if(q2 == 'one') q2 = 1;
    else if(q2 == 'two') q2 = 2;
    else if(q2 == 'three') q2 = 3;
    else if(q2 == 'four') q2 = 4;
    else if(q2 == 'five') q2 = 5;
    else if(q2 == 'tu') q2 = 2;
    db.collection('feedback').add({ 
        ques2 : q2
    });
    total_sum += q2;
  }

  function q4(agent) {
    let q3 = agent.parameters.number;
    if(q3 == 'one') q3 = 1;
    else if(q3 == 'two') q3 = 2;
    else if(q3 == 'three') q3 = 3;
    else if(q3 == 'four') q3 = 4;
    else if(q3 == 'five') q3 = 5;
    else if(q3 == 'tu') q3 = 2;
    db.collection('feedback').add({ 
        ques3 : q3
    });
    total_sum += q3;
  }

  function q5(agent) {
    let q4 = agent.parameters.number;
    if(q4 == 'one') q4 = 1;
    else if(q4 == 'two') q4 = 2;
    else if(q4 == 'three') q4 = 3;
    else if(q4 == 'four') q4 = 4;
    else if(q4 == 'five') q4 = 5;
    else if(q4 == 'tu') q4 = 2;
    db.collection('feedback').add({ 
        ques4 : q4
    });
    total_sum += q4;
  }

    function q6(agent) {
    let q5 = agent.parameters.number;
    if(q5 == 'one') q5 = 1;
    else if(q5 == 'two') q5 = 2;
    else if(q5 == 'three') q5 = 3;
    else if(q5 == 'four') q5 = 4;
    else if(q5 == 'five') q5 = 5;
    else if(q5 == 'tu') q5 = 2;
    db.collection('feedback').add({ 
        ques5 : q5
    });
    total_sum += q5;
  }

    function q7(agent) {
    let q6 = agent.parameters.number;
    if(q6 == 'one') q6 = 1;
    else if(q6 == 'two') q6 = 2;
    else if(q6 == 'three') q6 = 3;
    else if(q6 == 'four') q6 = 4;
    else if(q6 == 'five') q6 = 5;
    else if(q6 == 'tu') q6 = 2;
    db.collection('feedback').add({ 
        ques6 : q6
    });
    total_sum += q6;
  }

    function q8(agent) {
    let q7 = agent.parameters.number;
    if(q7 == 'one') q7 = 1;
    else if(q7 == 'two') q7 = 2;
    else if(q7 == 'three') q7 = 3;
    else if(q7 == 'four') q7 = 4;
    else if(q7 == 'five') q7 = 5;
    else if(q7 == 'tu') q7 = 2;
    db.collection('feedback').add({ 
        ques7 : q7
    });
    total_sum += q7;
  }

    function q9(agent) {
    let q8 = agent.parameters.number;
    if(q8 == 'one') q8 = 1;
    else if(q8 == 'two') q8 = 2;
    else if(q8 == 'three') q8 = 3;
    else if(q8 == 'four') q8 = 4;
    else if(q8 == 'five') q8 = 5;
    else if(q8 == 'tu') q8 = 2;
    db.collection('feedback').add({ 
        ques8 : q8
    });
    total_sum += q8;
  }

    function q10(agent) {
    let q9 = agent.parameters.number;
    if(q9 == 'one') q9 = 1;
    else if(q9 == 'two') q9 = 2;
    else if(q9 == 'three') q9 = 3;
    else if(q9 == 'four') q9 = 4;
    else if(q9 == 'five') q9 = 5;
    else if(q9 == 'tu') q9 = 2;
    db.collection('feedback').add({ 
        ques9 : q9
    });
    total_sum += q9;
  }

    function q11(agent) {
    let q10 = agent.parameters.number;
    if(q10 == 'one') q10 = 1;
    else if(q10 == 'two') q10 = 2;
    else if(q10 == 'three') q10 = 3;
    else if(q10 == 'four') q10 = 4;
    else if(q10 == 'five') q10 = 5;
    else if(q10 == 'tu') q10 = 2;
    db.collection('feedback').add({ 
        ques10 : q10
    });
    total_sum += q10;
  }

    function q12(agent) {
    let q11 = agent.parameters.number;
    if(q11 == 'one') q11 = 1;
    else if(q11 == 'two') q11 = 2;
    else if(q11 == 'three') q11 = 3;
    else if(q11 == 'four') q11 = 4;
    else if(q11 == 'five') q11 = 5;
    else if(q11 == 'tu') q11 = 2;
    db.collection('feedback').add({ 
        ques11 : q11
    });
    total_sum += q11;
  }
 
    function q13(agent) {
    let q12 = agent.parameters.number;
    if(q12 == 'one') q12 = 1;
    else if(q12 == 'two') q12 = 2;
    else if(q12 == 'three') q12 = 3;
    else if(q12 == 'four') q12 = 4;
    else if(q12 == 'five') q12 = 5;
    else if(q12 == 'tu') q12 = 2;
    db.collection('feedback').add({ 
        ques12 : q12
    });
    total_sum += q12;
  }

    function q14(agent) {
    let q13 = agent.parameters.number;
    if(q13 == 'one') q13 = 1;
    else if(q13 == 'two') q13 = 2;
    else if(q13 == 'three') q13 = 3;
    else if(q13 == 'four') q13 = 4;
    else if(q13 == 'five') q13 = 5;
    else if(q13 == 'tu') q13 = 2;
    db.collection('feedback').add({ 
        ques13 : q13
    });
    total_sum += q13;
    let avg = total_sum / 13;
    db.collection('feedback').add({ 
        teacherAvg : avg
    });
  }

  let intentMap = new Map();
  intentMap.set('get_name', get_name);
  intentMap.set('get_dept', get_dept);
  intentMap.set('get_year', get_year);
  intentMap.set('get_subject', get_subject);
  intentMap.set('q1', q1);
  intentMap.set('q2', q2);
  intentMap.set('q3', q3);
  intentMap.set('q4', q4);
  intentMap.set('q5', q5);
  intentMap.set('q6', q6);
  intentMap.set('q7', q7);
  intentMap.set('q8', q8);
  intentMap.set('q9', q9);
  intentMap.set('q10', q10);
  intentMap.set('q11', q11);
  intentMap.set('q12', q12);
  intentMap.set('q13', q13);
  intentMap.set('q14', q14);
  agent.handleRequest(intentMap);
});