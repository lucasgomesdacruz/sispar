import styles from "./Modal.module.scss";

// Componente receber os filhos que são o texto e botões

const Modal = ({ children }) => {
  return (
    <section className={styles.modalBackround}>
      <div className={styles.modalCancel}>
        
        <div className={styles.content}>
          {children}
          
        </div>
      </div>
    </section>
  );
};

export default Modal;
