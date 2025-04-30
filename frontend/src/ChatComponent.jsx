import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './ChatComponent.css';

export default function ChatComponent() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Bem-vindo ao ChatFURIA! 🔥' }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  // Mantém o scroll sempre no fim
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // adiciona a mensagem do usuário
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    const userMessage = input;
    setInput('');

    try {
      const { data } = await axios.post('/api/chat', { message: userMessage });
      setMessages(prev => [...prev, { sender: 'bot', text: data.reply }]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: 'Erro ao conectar com o bot.' }
      ]);
    }
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-header">
        <img src="/Img/Furia.png" alt="FURIA Logo" className="chat-logo" />
      </div>

      <div className="chat-body">
        {messages.map((msg, i) => (
          <div key={i} className={`msg ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}
