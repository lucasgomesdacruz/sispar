// CancelRequestModal.js
import styles from "./CancelRequestModal.module.scss"
import Modal from "../modal/Modal";

const CancelRequestModal = ({ onClose, onConfirm }) => {
  return (
    <Modal onClose={onClose}>
      <h3>Tem certeza que deseja cancelar a solicitação?</h3>
      <div className={styles.content}>
              <button className={styles.edit} type="button" onClick={onClose}>
                    Fechar
              </button>
              <button className={styles.clean} type="button" onClick={onConfirm}>
                Sim, excluir
              </button>
      </div>
    </Modal>
  );
};

export default CancelRequestModal;
