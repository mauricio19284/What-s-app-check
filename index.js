require("dotenv").config();
const twilio = require("twilio");

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

client.messages
  .create({
    from: process.env.TWILIO_WHATSAPP_NUMBER,
    to: process.env.RECIPIENT_WHATSAPP_NUMBER,
    body: process.env.MESSAGE_TEXT,
  })
  .then((message) => {
    console.log("Message sent successfully!");
    console.log("Message SID:", message.sid);
    console.log("Status:", message.status);
  })
  .catch((err) => {
    console.error("Failed to send message:", err.message);
    process.exit(1);
  });
