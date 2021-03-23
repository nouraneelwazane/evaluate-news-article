import 'babel-polyfill'
const express = require('express');
const app = express();
const request = require('supertest'); // to test the server

describe('Server Test', () => {
    it('responds with json', async() => {
        request(app)
          .get('/test')
          .set('Accept', 'application/json')
          .expect('Content-Type', '/json/')
          .expect(200);
      });
})
