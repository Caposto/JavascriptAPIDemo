const { Console } = require("console");

// Protect keys with environmental variables (look into how to setup on computer)
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const Twilio = require("twilio")(accountSid, authToken);

const client = new Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

client.messages.list().then(messages => console.log(`The most recent message is ${messages[0].body}`)).catch(err => console.error(err));

console.log("Gathering your message log");