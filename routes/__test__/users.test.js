const request = require('supertest');
const app = require('../../app');
it('returns user info by id', async () => {
  const response = await request(app)
    .get('/users/1dac')
    .send()
    .expect(200);

  expect(response.body.userId).toEqual("1dac");
});

it('returns 404 if user do not exists', async () => {
  const response = await request(app)
    .get('/users/2dac')
    .send()
    .expect(404);
});
