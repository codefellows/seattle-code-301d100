'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`Heyyy girl! We are up on ${PORT}`));


app.get('/codenames', getTestResponse);

async function getTestResponse(request,response,next){
  try {
    const aiResponse = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'Generate team names for coding students',
      max_tokens: 200,
      temperature: 0.8,
    });

    response.status(200).send(aiResponse.data.choices[0].text);
  } catch (error) {
    next(error);
  }
}

app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

app.use((error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error.message);
});
