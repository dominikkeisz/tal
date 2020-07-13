const app = require('../../src/backend/server');
const supertest = require('supertest');
const request = supertest(app);
const mongoose = require('mongoose');

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
       if (err) {
           console.error(err);
           process.exit(1);
       } 
    });
});

describe('Authentication endpoints test suite', () => {
    it('Test successful register', async (done) => {
        const response = await request.get('/test');

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('pass!');
        done();
    });
});