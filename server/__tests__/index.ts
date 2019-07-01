import app from '../server/app';

const request = require('supertest');

describe('GET /', function () {
  it('responds with an html file', function(done) {
    request(app).get('/')
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .expect(function(res) {
        expect(res.text).toContain('Todos App');
      })
      .expect(200, done);
  });
});

describe('POST /todos/add', function () {
  it('Adds a todo', function(done) {
    request(app).post('/todos/add')
      .set('Accept', 'application/json')
      .send({
        todoId: '12345-6789',
        todo: {
          id: '12345-6789',
          text: 'Todo text xoxoxo',
          done: false
        }
      })
      .expect('Content-Type', /json/)
      .expect(function(res) {
        expect(res.body.id).toEqual('12345-6789');
      })
      .expect(200, done);
  });
});
