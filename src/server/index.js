var path = require('path');
const fetch = require('node-fetch');

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
//const bodyParser = require('body-parser');
app.use(express.json());
//app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'))

// designates what port the app will listen to for incoming requests
const PORT = 8081
app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}!`)
})

const mockAPIResponse = require('./mockAPI.js')

//Configuration to be able to use env variables
const dotenv = require('dotenv');
dotenv.config();

//GLOBAL VARIABLES
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const APIkey = process.env.API_KEY;

app.get('/', function (req, res) {
    res.sendFile('dist/index.html') //in production
    //res.sendFile(path.resolve('src/client/views/index.html')) //in development
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// make a GET request to meaningcloud
const getData = async (url) => {
    const response = await fetch(url)
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('error', error);
    }
};


//POST Route
app.post('/addURL', async (request, response) => {
    try {
        const api_request_url = `${baseURL}?key=${APIkey}&url=${request.body.url}&lang=en`;
        console.log(api_request_url);
        getData(api_request_url) //get data from meaningcloud API
        .then(function (data) { //send response to client
            projectData.text = data.sentence_list[0].text;
            projectData.score_tag = data.score_tag;
            projectData.agreement = data.agreement;
            projectData.subjectivity = data.subjectivity;
            projectData.confidence = data.confidence;
            projectData.irony = data.irony;
            response.send(projectData);
        })
    } catch (error) {
        console.log(error.message)
    }
})
