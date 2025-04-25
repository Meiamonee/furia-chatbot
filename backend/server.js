const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rota de exemplo para o chatbot
app.post('/mensagem', (req, res) => {
  const { texto } = req.body;

  let resposta = 'Desculpe, não entendi sua pergunta.';

  if (texto.toLowerCase().includes('próximo jogo')) {
    resposta = 'Próximo jogo da FURIA é sexta-feira às 18h!';
  }

  res.json({ resposta });
});

// Servir os arquivos estáticos do React
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Rota catch-all para retornar o index.html do React
app.get('/*splat', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
