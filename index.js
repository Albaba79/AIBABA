const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello, AIBABA!');
});

app.listen(port, () => {
  console.log(`AIBABA app listening at http://localhost:${port}`);
});
