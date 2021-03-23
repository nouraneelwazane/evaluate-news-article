import {checkForURL} from './checkURL'

const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

// update UI with user API data
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

export const handleSubmit = async () => {
    let formURL = document.getElementById('article-url').value;
    if (checkForURL(formURL) == true) {
        document.getElementById('error').innerHTML="";
        post('http://localhost:8081/addURL', {url: formURL})
        .then(function (data) {
            updateUI(data);
        });
    }
    else {
        document.getElementById('error').innerHTML="Invalid URL";
    }
}

