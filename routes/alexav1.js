/*jshint esversion: 6 */

//Load up express and endpoints
var express = require('express');
var router = express.Router();
var config = require("../config/dev.json");

// Core user functions
router.post('/v1', handleAlexaRequest);
module.exports = router;

function handleAlexaRequest (req, res) {
var alexaContent = req.body;
var awsUser = alexaContent.session.user.userId;
var triggerName = alexaContent.request.intent.name;
var triggerSlots = alexaContent.request.intent.slots;
var cardObject = {};
var outputSpeech = {};

// In production, as requests will come from places other than your amazon account,
// you will need to swap with out with validation of user against a users database
if (awsUser === config.requestingUser) {
  // Trigger names are called 'intents', and are defined when you create your function using the aws console
  switch (triggerName) {
    case "triggerNameOne":
      // Put in here calls to your own functions / services
      //Additional slot information is provided in triggerSlots. These are defined and explained in more detail in aws alexa console
      console.log (JSON.stringify(triggerSlots));
      // Output from functional calls should be the setting of cardObject and outputSpeech objects
      // See aws alexa docs for more info on diffent types, and customising the card and speach objects
      cardObject ={
        "content": "Trigger one was activated by our web server",
        "title": "Trigger One Activated",
        "type": "Simple"};
      outputSpeech =  {
        "type": "PlainText",
        "text": "Trigger one was requested to be activated"};
      //Call the function that builds the compliant alexa responce
      sendAlexaResponce(res, cardObject, outputSpeech);
      break;
    case "triggerNameTwo":
      // Put in here calls to your own functions / services
      // Output from functional calls should be the setting of cardObject and outputSpeech objects
      // See aws alexa docs for more info on diffent types, and customising the card and speach objects
      cardObject ={
        "content": "Trigger two was activated by our web server",
        "title": "Trigger Two Activated",
        "type": "Simple"};
      outputSpeech =  {
        "type": "PlainText",
        "text": "Trigger two was requested to be activated"};
      //Call the function that builds the compliant alexa responce
      sendAlexaResponce(res, cardObject, outputSpeech);
      break;
    //Add additional case statements here if you set up additional utterances
    //Should the intent passed to the server not match any of the above, send a generic error message back
    default:
      cardObject ={
        "content": "Ooops, we cant do that right now. Checkout out MY WEBSITE for more help using the alexa integration",
        "title": "Need help with MY SAMPLE APP",
        "type": "Simple"};
      outputSpeech =  {
        "type": "PlainText",
        "text": "We are always updating what you can do by voice automation. Checkout MY WEBSITE for a comprensive list, and also for help information"};
        sendAlexaResponce(res,cardObject, outputSpeech);
        break;
    }
  } else {
      //If request is made by an invalid user, send responce and log for more analysis
      cardObject ={
        "content": "Sorry, but you do not have permission to use this service at this time",
        "title": "Permission Denied",
        "type": "Simple"};
      outputSpeech =  {
        "type": "PlainText",
        "text": "Sorry, but you do not have permission to use this service at this time"};
        //Add any secuirty logging for failed requests here
        sendAlexaResponce(res,cardObject, outputSpeech);
    }
}

//This core function wraps up your card and speach objects in the json structure expected back by alexa
function sendAlexaResponce (res,cardObject, outputSpeach){
  //Due to the maximum lenght restrictions on responce text and speach, automatically concatinate
  // after 5000 charachters to prevent alexa errors
  if (outputSpeach.text.length > 5000) {
    outputSpeach.text += "<p>...</p>";
  }
  if (cardObject.content.length > 5000) {
    cardObject.content += "<p>...</p>";
  }
  var objectToSend = {
    "version": "1.0",
    "response": {
      "outputSpeech": outputSpeach,
      "card": cardObject,
      "reprompt": {
        "outputSpeech": {
          "type": "PlainText",
          "text": "Awaiting your instructions"
        }
      },
      "shouldEndSession": false
    }
  };
  res.send(objectToSend);
}
