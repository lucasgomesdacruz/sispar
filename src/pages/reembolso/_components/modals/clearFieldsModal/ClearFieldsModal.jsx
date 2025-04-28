
// ClearFieldsModal.js
import styles from "./clearFieldsModal.module.scss"
import Modal from "../modal/Modal";

const ClearFieldsModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <h3>Deseja realmente limpar os campos preenchidos acima?</h3>
      <div className={styles.content}>
              <button className={styles.edit} type="button" onClick={onClose}>
                    Fechar
              </button>
              <button className={styles.clean} type="button" onClick={onClose}>
                Sim, excluir
              </button>
      </div>
    </Modal>
  );
};

export default ClearFieldsModal;
