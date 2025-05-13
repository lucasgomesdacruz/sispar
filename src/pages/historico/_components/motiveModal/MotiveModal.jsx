// MotiveModal.js
import styles from "./MotiveModal.module.scss"



const MotiveModal = ({ onClose, onConfirm  }) => {
  return (
    <section className={styles.modalBackround}>
      <div className={styles.modalCancel}>
        <h3>
          Tem certeza que deseja cancelar a solicitação?
        </h3>
        <div className={styles.content}>
                <button className={styles.edit} type="button" onClick={onClose}>
                      Fechar
                </button>
                <button className={styles.clean} type="button" onClick={onConfirm}>
                  Sim, excluir
                </button>
        </div>
      </div>
    </section>
  );
};

export default MotiveModal;
