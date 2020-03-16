const functions = require('firebase-functions');
// Import the service function and various response classes
const { dialogflow, MediaObject, Suggestions } = require('actions-on-google');
const app = dialogflow({
    debug: true
});

exports.helloWorld = functions.https.onRequest(app);
app.intent('Default Welcome Intent', (conv) => {
    conv.ask(`Playing naga fm`)
    conv.ask(new MediaObject({
        url: 'https://live.nagafm.com:18006/stream.mp3'
    }));
    conv.ask(new Suggestions(`exit`));
});

app.intent('Default Fallback Intent', (conv) => {
    conv.ask(`I didn't understand`);
    conv.ask(`I'm sorry, can you say that again?`);
});