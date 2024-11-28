const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      try {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      } catch (error) {
        done(error); // Pass the error to done if the assertion fails
      }
    });
  });

  it('should do nothing when success is false', () => {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined; // Verify no promise is returned
  });
});
