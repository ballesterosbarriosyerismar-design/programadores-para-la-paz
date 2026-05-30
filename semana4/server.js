const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hola, Semana 4');
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en el puerto 3000');
});
