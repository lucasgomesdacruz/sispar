import { MdOutlineNavigateNext } from 'react-icons/md';
import Header from '../../components/header/Header';
import styles from './Helpdesk.module.scss';

const Helpdesk = () => {
  return (
    <>
        <Header icon={<MdOutlineNavigateNext />} text="Central de Ajuda" />
        <main className={styles.helpdeskMain}>
            <div className={styles.helpdeskContent}>
                <h1 className={styles.helpdeskTitle}>Central de Ajuda</h1>

                {/* Canais de Contato */}
                <section className={styles.helpdeskSectionContact}>
                    <h2>Canais de Contato</h2>
                    <p className={styles.helpdeskDescription}>
                    Escolha a melhor forma para entrar em contato conosco
                    </p>

                    <div className={styles.contactMethod}>
                    <strong>Email</strong>
                    <p>suporte@sispar.com.br</p>
                    </div>

                    <div className={styles.contactMethod}>
                    <strong>Telefone</strong>
                    <p>(11) 4002-8922</p>
                    </div>

                    <div className={styles.contactMethod}>
                    <strong>Chat Online</strong>
                    <p>Disponível em dias úteis das 9h às 18h</p>
                    </div>
                </section>

                {/* Horário de Atendimento */}
                <section className={styles.helpdeskSection}>
                    <h2>Horário de Atendimento</h2>
                    <div className={styles.schedule}>
                    <div>
                        <span>Segunda à Sexta</span>
                        <span>08:00 - 18:00</span>
                    </div>
                    <div>
                        <span>Sábado</span>
                        <span>09:00 - 13:00</span>
                    </div>
                    <div>
                        <span>Domingo e Feriados</span>
                        <span>Fechado</span>
                    </div>
                    </div>
                </section>

                
            </div>
                {/* FAQ */}
            <section className={styles.helpdeskSectionFaq}>
                    <h2>Perguntas Frequentes</h2>

                    <details>
                    <summary>Como solicitar um reembolso?</summary>
                    <p>
                        Acesse a plataforma SISPAR, vá até "Reembolsos" e clique em "Nova Solicitação".
                        Preencha o formulário, anexe os comprovantes e envie para análise. Acompanhe o status na mesma seção.
                    </p>
                    </details>

                    <details>
                    <summary>Qual o prazo para aprovação de reembolsos?</summary>
                    <p>
                        O prazo médio é de 3 dias úteis após o envio. O pagamento é feito em até 5 dias úteis após aprovação.
                    </p>
                    </details>

                    <details>
                    <summary>Quais documentos são necessários para o reembolso?</summary>
                    <p>
                        Nota fiscal ou recibo original com CNPJ/CPF, data e valor. Para transporte: comprovante de embarque.
                        Para hospedagem: recibo com datas de entrada e saída.
                    </p>
                    </details>

                    <details>
                    <summary>Como recuperar minha senha?</summary>
                    <p>
                        Clique em "Esqueci minha senha" na tela de login. Siga as instruções enviadas por email. O link é
                        válido por 24 horas.
                    </p>
                    </details>

                    <details>
                    <summary>O sistema é compatível com dispositivos móveis?</summary>
                    <p>
                        Sim, o SISPAR é responsivo e pode ser acessado via smartphones, tablets e computadores.
                    </p>
                    </details>
            </section>
        </main>
    </>
  );
};

export default Helpdesk;
