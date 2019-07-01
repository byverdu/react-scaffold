import { Request, Response } from 'express';

import app from '../index';

const request = require('supertest');

// afterEach((done) => {
//     return  app && app.close(done);
//   });

describe('POST /users', function () {
    it('responds with json', async function (done) {
        const result: Response = await request(app).get('/');

        expect(result.status).toBe(200);
        done();
        
            // .expect('Content-Type', 'text/html; charset=UTF-8')
            // .expect(200)
            // .end(function (err, res) {
            //     if (err) return done(err);
            //     done();
            //     // console.log(res)
            // });
    })
})


/*
describe('App Request', () => {
  test('should responds with 404', async (done) => {
    const result = await request(app).get('/');
    expect(result.status).toBe(404);
    done();
  });
});

*/