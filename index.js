const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.json({
    message: "Shipping to production is a spiritual discipline."
  });
});

app.listen(port, () => {
  console.log(`Service A running on port ${port}`);
});
