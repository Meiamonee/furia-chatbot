import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './PaginaInicial.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleChatClick = () => {
        navigate('/chat');
    };

    return (
        <div className="landing-container">
            <div className="fundo-video">
                <iframe
                    src="https://www.youtube.com/embed/tjMs5UuK_S8?autoplay=1&mute=1&loop=1&playlist=tjMs5UuK_S8&controls=0&showinfo=0&modestbranding=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="video"
                    title="FURIA CS Chatbot"
                ></iframe>
            </div>

            <div className="content">
                <div className="logo-container">
                    <img
                        src="/Img/Furia.png"
                        alt="FURIA Esports"
                        className="logo"
                    />
                </div>
                <h1 className="title">FURIA CHATBOT</h1>
                <p className="description">
                    Converse com o bot da FURIA e fique por dentro dos jogos, estatísticas e muito mais!
                </p>
                <button className="chat-button" onClick={handleChatClick}>
                    Entrar no Chat
                </button>
            </div>
            <footer className="footer">
                <div className="social-icons">
                    <a href="https://www.instagram.com/furiagg/?hl=pt" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://x.com/FURIA" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.facebook.com/furiagg/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </div>
            </footer>
        </div>

    );

};

export default LandingPage;
