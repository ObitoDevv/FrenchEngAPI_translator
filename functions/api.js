const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const translate = require('translate-google'); 
const app = express();
const router = express.Router();
// const PORT = 5000;


// Middleware
app.use(bodyParser.json());

// Translation Function using translate-google
async function translateToFrench(text) {
  try {
    const translatedText = await translate(text, { to: 'fr' }); // Translate text to French
    return translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    throw error; // Throw error if translation fails
  }
}

// Translation Endpoint
router.get('/translate', async (req, res) => {
  try {
    const { text } = req.body;
    const translatedText = await translateToFrench(text); // Call translateToFrench function
    const translation = translatedText;
    // await translation.save();
    res.json({ translation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server
app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
