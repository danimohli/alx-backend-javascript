const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');
const { expect } = chai;

chai.use(chaiHttp);

describe('Index Page', () => {
  it('should return status code 200', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200); // Verify status code
        done();
      });
  });

  it('should return the correct message', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system'); // Verify response text
        done();
      });
  });

  it('should set Content-Type to text/html', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.header('content-type', /text\/html/); // Verify Content-Type header
        done();
      });
  });
});

describe('Cart Page', () => {
  it('should return status code 200 for valid cart ID', (done) => {
    chai
      .request(app)
      .get('/cart/123')
      .end((err, res) => {
        expect(res).to.have.status(200); // Verify status code
        expect(res.text).to.equal('Payment methods for cart 123'); // Verify message
        done();
      });
  });

  it('should return status code 404 for invalid cart ID (non-number)', (done) => {
    chai
      .request(app)
      .get('/cart/abc')
      .end((err, res) => {
        expect(res).to.have.status(404); // Verify status code
        expect(res.text).to.equal('Invalid cart ID'); // Verify message
        done();
      });
  });

  it('should return status code 404 for missing cart ID', (done) => {
    chai
      .request(app)
      .get('/cart/')
      .end((err, res) => {
        expect(res).to.have.status(404); // Verify status code
        expect(res.text).to.equal('Invalid cart ID'); // Verify message
        done();
      });
  });
});
