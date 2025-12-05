const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    console.log("Received request at Service A");
  res.json({
    message: "Shipping to production is a spiritual discipline."
  });
});

app.listen(port, () => {
  console.log(`Service A running on port ${port}`);
});
