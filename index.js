const express = require('express');
const { rootRouter } = require('./src/router/rootRouter');

const app = express();

app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
  res.send('OKE nha Nhi gầy');
});

app.use(rootRouter);

app.listen(port, () => {
  console.log(` port ${port}`);
});