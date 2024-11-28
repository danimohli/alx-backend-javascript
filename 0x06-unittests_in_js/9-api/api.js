const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});


app.get('/cart/:id', (req, res) => {
  const cartId = req.params.id;


  if (!/^\d+$/.test(cartId)) {
    return res.status(404).send('Invalid cart ID');
  }


  res.status(200).send(`Payment methods for cart ${cartId}`);
});

const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
