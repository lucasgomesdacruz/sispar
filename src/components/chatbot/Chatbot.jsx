import React, { useEffect, useState } from 'react';
import styles from './Chatbot.module.scss';
import { RiRobot3Line } from 'react-icons/ri';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const respostas = {
  'olá': 'Olá! Como posso ajudar você hoje?',
  'oi': 'Oi! Em que posso ajudar?',
  'tchau': 'Até logo! Se precisar, é só chamar.',
  'quem é você?': 'Eu sou o assistente virtual do SISPAR.',
  'como funciona o sispar?': 'O SISPAR é um sistema para controle de reembolsos, você pode cadastrar pedidos, acompanhar status, etc.',
  'ajuda': 'Claro! Pergunte qualquer coisa sobre o SISPAR que eu tento ajudar.',
  'ola': 'Olá! Como posso ajudar você hoje?',
};

const opcoes = [
  'Olá',
  'Quem é você?',
  'Como funciona o SISPAR?',
  'Ajuda',
  'Tchau'
];

function Chatbot() {
  const [aberto, setAberto] = useState(false);
  const [mensagens, setMensagens] = useState([
    { autor: 'bot', texto: 'Olá! Como posso ajudar com o SISPAR?' }
  ]);
  const [mensagemUsuario, setMensagemUsuario] = useState('');

  useEffect(() => {
    if (aberto) {
      toast.info("O ChatBot ainda está em desenvolvimento :)");
    }
  }, [aberto]);

  function enviarMensagem(msg) {
    if (!msg.trim()) return;

    const textoLower = msg.trim().toLowerCase();
    setMensagens(mensagensAntigas => [...mensagensAntigas, { autor: 'usuario', texto: msg }]);
    setMensagemUsuario('');

    const resposta = respostas[textoLower] || 'Desculpe, não entendi. Pode reformular?';

    setTimeout(() => {
      setMensagens(mensagensAntigas => [...mensagensAntigas, { autor: 'bot', texto: resposta }]);
    }, 500);
  }

  function enviarInput() {
    enviarMensagem(mensagemUsuario);
  }

  return (
    <>
      {!aberto && (
        <button
          className={styles.botaoSispar}
          onClick={() => setAberto(true)}
          aria-label="Abrir chatbot SISPAR"
        >
          SISPAR <RiRobot3Line />
        </button>
      )}

      {aberto && (
        <div className={styles.chatbot}>
          <div className={styles.header}>
            <h2>SISPAR <RiRobot3Line /></h2>
            <button
              className={styles.fechar}
              onClick={() => setAberto(false)}
              aria-label="Fechar chatbot"
            >
              &times;
            </button>
          </div>

          <div className={styles.mensagens}>
            {mensagens.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.autor === 'bot' ? styles.mensagemBot : styles.mensagemUsuario
                }
              >
                {msg.texto}
              </div>
            ))}
          </div>

          <div className={styles.opcoes}>
            {opcoes.map((opcao, i) => (
              <button
                key={i}
                className={styles.opcao}
                onClick={() => enviarMensagem(opcao)}
              >
                {opcao}
              </button>
            ))}
          </div>

          <div className={styles.entrada}>
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={mensagemUsuario}
              onChange={(e) => setMensagemUsuario(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') enviarInput();
              }}
            />
            <button onClick={enviarInput}>Enviar</button>
          </div>
        </div>
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default Chatbot;
