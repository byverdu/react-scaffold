import { Request, Response } from 'express';
import app from '../server/app';

const request = require('supertest');

describe('GET /', function () {
  it('sends a', function(done) {
    request(app).get('/')
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .expect(200, done);
  });
});
