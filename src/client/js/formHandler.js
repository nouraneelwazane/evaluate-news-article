import {checkForURL} from './checkURL'

// update UI with API data
function updateUI(data) {
    try {
        document.getElementById('text').innerHTML = data.text;
        document.getElementById('score_tag').innerHTML = data.score_tag;
        document.getElementById('agreement').innerHTML = data.agreement;
        document.getElementById('subjectivity').innerHTML = data.subjectivity;
        document.getElementById('confidence').innerHTML = data.confidence;
        document.getElementById('irony').innerHTML = data.irony;
    } catch (error) {
        console.log('error', error);
    }
}

export function handleSubmit(){
    let formURL = document.getElementById('article-url').value; // get the user input: url
    if (checkForURL(formURL) == true) { // check if the user input is a valid url 
        document.getElementById('error').innerHTML="";
        fetch('http://localhost:8081/addURL', { // if valid url, send a post request to the server with the url
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url: formURL})
        })
        .then(res => res.json()) // obtain the sentiments of the article in the url
        .then(function(res) {
            updateUI(res);
        })
    }
    else { //in case of an invalid url update the UI with an error message
        document.getElementById('error').innerHTML="Invalid URL";
    }
}