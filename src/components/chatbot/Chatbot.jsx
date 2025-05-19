import React, { useState } from 'react';
import styles from './Chatbot.module.scss';
import { RiRobot3Line } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Chatbot() {
  const [aberto, setAberto] = useState(false);
  const [mensagens, setMensagens] = useState([
    { autor: 'bot', texto: 'Olá! Como posso ajudar com o SISPAR?' }
  ]);
  const [mensagemUsuario, setMensagemUsuario] = useState('');

  function enviarMensagem() {
    if (mensagemUsuario === '') return;
    setMensagens([...mensagens, { autor: 'usuario', texto: mensagemUsuario }]);
    setMensagemUsuario('');
  }

  function abrirChat() {
    setAberto(true);
    toast.info('Chat ainda está em desenvolvimento. 😅', {
      position: 'top-right',
      autoClose: 3000,
    });
  }

  return (
    <>
      <ToastContainer /> {/* Container do Toast */}

      {!aberto && (
        <button
          className={styles.botaoSispar}
          onClick={abrirChat}
          aria-label="Abrir chatbot SISPAR"
        >
          SISPAR <RiRobot3Line />
        </button>
      )}

      {aberto && (
        <div className={styles.chatbot}>
          <div className={styles.chatbot__header}>
            <h2>SISPAR <RiRobot3Line /></h2>
            <button
              className={styles.chatbot__fechar}
              onClick={() => setAberto(false)}
              aria-label="Fechar chatbot"
            >
              &times;
            </button>
          </div>

          <div className={styles.chatbot__mensagens}>
            {mensagens.map((msg, i) => (
              <div
                key={i}
                className={`${styles.chatbot__mensagem} ${styles[`chatbot__mensagem--${msg.autor}`]}`}
              >
                {msg.texto}
              </div>
            ))}
          </div>

          <div className={styles.chatbot__entrada}>
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={mensagemUsuario}
              onChange={(e) => setMensagemUsuario(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && enviarMensagem()}
            />
            <button onClick={enviarMensagem}>Enviar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
