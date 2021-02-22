import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: "Hello Word - NLW 04 !!!" });
});

app.post('/', (request, response) => {
  return response.json({ message: "Os dados foram salvos com sucesso!" });
});

app.listen(3333, () => console.log ('server is running!'));