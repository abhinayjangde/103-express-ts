import express from 'express';
import env from './config/env.js';

const port = env.port;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.get("/products", (req, res) => {
  const products = [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 150 },
    { id: 3, name: "Product C", price: 200 },
  ];
  res.status(200).json(products);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
