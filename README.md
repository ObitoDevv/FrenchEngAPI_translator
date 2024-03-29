# FrenchEngAPI_translator
1.Project Overview:

*Project Name: English to French Translation API
*Programming Language: JavaScript
*Framework: Express.js
*Testing Tool: Postman
*Deployment Platform: Netlify

2.Project Details:

*Implemented a RESTful API endpoint accessible via the POST method to handle translation requests.
*Utilized Express.js framework to create the API endpoint and handle request/response logic.
*Used Postman for testing the API functionality, ensuring correct translation and response format.
*Deployed the API to Netlify for easy access and testing.

3.Submission Links:

* Deployed API Endpoint:  https://engtofrench.netlify.app/.netlify/functions/api/translate
* GitHub Repository:  https://github.com/ObitoDevv/FrenchEngAPI_translator

4.API Functionality:

*Accepts JSON data in the request body with a key-value pair where the key is "text" and the value is the English text to translate.
*Responds with a JSON object containing the translated text in French in the format: { "translation": "Translated text in French" }.
*Handles missing or invalid request bodies and errors during translation with appropriate error messages and status codes.
