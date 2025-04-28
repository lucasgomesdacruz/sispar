// MotiveModal.js
import styles from "./MotiveModal.module.scss"
import Modal from "../modal/Modal";


const MotiveModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor,
        sit amet consectetur adipisicing.
      </h3>
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

export default MotiveModal;
