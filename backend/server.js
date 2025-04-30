const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


const respostas = {
  jogo: [
    'O próximo jogo da FURIA é sexta às 18h! 🔥',
    'Na próxima quinta temos partida contra a MIBR!',
    'Fique ligado: jogo amanhã às 20h no ESL One!'
  ],
  mvp: [
    'No último jogo, o MVP foi o KSCERATO! 🏆',
    'Quem brilhou foi o yuurih, MVP do dia!',
    'MVP foi o arT com aquele clutch incrível!'
  ],
  saudacao: [
    'Fala, fã da FURIA! Como posso ajudar?',
    'E aí! Que pergunta manda?',
    'Salve! Pronto para falar sobre a FURIA?'
  ]
};


function gerarResposta(message) {
  const msg = message.toLowerCase();

  // Percorre cada intenção
  for (const intent in respostas) {
    if (msg.includes(intent)) {
      const lista = respostas[intent];
      // escolhe randomicamente uma resposta
      return lista[Math.floor(Math.random() * lista.length)];
    }
  }


  const defaultReplies = [
    'Desculpe, não entendi. Pode reformular?',
    'Hmmm... não captei, tenta outra coisa!',
    'Ainda estou aprendendo, manda outra pergunta.'
  ];
  return defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
}

app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  const reply = gerarResposta(message);
  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`✅ Backend rodando em http://localhost:${PORT}`);
});
