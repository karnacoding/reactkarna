require('dotenv').config();
const cors = require('cors');
const express = require("express");
const bodyParser = require('body-parser');
const sendEmail = require('../utils/SendEmail.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post("/api/send-email", (req, res) => {
    try {
        const {email, name, message } = req.body;
    
        // Call the sendEmail function with the provided email details
        sendEmail(email, name, message);
    
        res.status(200).json({ message: 'Email sent successfully' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Email sending failed' });
      }
});
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
 