// DeleteRowModal.js
import styles from "./DeleteRowModal.module.scss"
import Modal from "../modal/Modal";

const DeleteRowModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <h3>Deseja realmente excluir os dados dessa linha?</h3>
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

export default DeleteRowModal;
