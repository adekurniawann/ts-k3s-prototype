// src/index.ts
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  console.log(`Server is running at ${port}`);
  res.send(`Server is running at ${port}`);
  console.log(`Server is running at ${port}`);

  const value_a = process.env.value_a || 'Default1';
  const value_b = process.env.value_b || 'Default1';
  const value_c = process.env.value_c || 'Default1';

console.log(`Additional Variable 1: ${value_a}`);
console.log(`Additional Variable 2: ${value_b}`);
console.log(`Additional Variable 3: ${value_c}`);

});

app.listen(port, () => {
  console.log(`Server is running at http://0.0.0.0:${port}`);
});