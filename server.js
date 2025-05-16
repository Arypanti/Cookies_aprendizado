const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.post('/registrar', (req, res) => {
  const { tecnico, placa, servico, setor, obs } = req.body;

  res.cookie('TECNICO', tecnico);
  res.cookie('PLACA', placa);
  res.cookie('SERVICO', servico);
  res.cookie('SETOR', setor);
  res.cookie('OBS', obs);

  res.redirect('/relatorio');
});

app.get('/relatorio', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/relatorio.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
