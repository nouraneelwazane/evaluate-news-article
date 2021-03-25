## Evaluate News Article  with Natural Language Processing

Starter code at [Udacity](https://github.com/udacity/fend/tree/refresh-2019/projects/evaluate-news-nlp).

This project allows users to analyze an article of their choice by providing its url. The project uses the [meaning cloud API](https://www.meaningcloud.com/) to analyze the article.

### Steps to run the project

1. Install npm
```
npm install
```

2. Install node fetch
```
npm install node-fetch
```
3. To run jest tests
```
npm run test
```
4. To run server
```
npm run start
```
and then go to http://localhost:8081/


### Sample Run

- In the case of an invalid URL, an invalid url warning appears to the user in red.

![](./pictures/invalid_url.PNG)


- In the case of a valid url entry, the user receives the sentiment of the article url in the form results.

![](./pictures/valid_url.PNG)


- A run of the jest tests

![](./pictures/test_run.PNG)


### To work in development mode

- Remove the service workers script in client/views/index.html

- Change in server/index.js from
```
app.get('/', function (req, res) {
    res.sendFile('dist/index.html') //in production
    //res.sendFile(path.resolve('src/client/views/index.html')) //in development
})
```

to
```
app.get('/', function (req, res) {
    //res.sendFile('dist/index.html') //in production
    res.sendFile(path.resolve('src/client/views/index.html')) //in development
})
```

- Run in 2 seperate terminals
```
npm run build-dev
```
and 
```
npm run start
```

- Then go to http://localhost:8080/