const test = require('tape');
const request = require('supertest');
const app = require('../src/app');
const db_build = require('../src/database/db_build');


test('test home page', (t) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /text/)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('test signup', (t) => {
  request(app)
    .get('/signup')
    .expect(200)
    .expect('Content-Type', /text/)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('test login Page', (t) => {
  request(app)
    .get('/login')
    .expect(200)
    .expect('Content-Type', /text/)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('test profile Page', (t) => {
  request(app)
    .get('/profile/1')
    .expect(200)
    .expect('Content-Type', /text/)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('test createProposal Page', (t) => {
    request(app)
      .get('/createproposal')
      .expect(302)
      .expect('Content-Type', /text/)
      .end((err, res) => {
        t.error(err);
        t.end();
      });
  });

test('test error route', (t) => {
  request(app)
    .get('/school')
    .expect(404)
    .expect('Content-Type', /text/)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});


test.onFinish(() => process.exit(0));