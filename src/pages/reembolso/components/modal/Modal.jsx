import styles from "./Modal.module.scss";

const modalMessages = {
  clearFields: "Deseja realmente limpar os campos preenchidos acima?",
  deleteRow: "Deseja realmente excluir os dados dessa linha?",
  cancelRequest: "Tem certeza que deseja cancelar a solicitação?",
  motive: "Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing."
};

// eslint-disable-next-line react/prop-types
export default function Modal({ modalType, onClose }) {
  if (!modalType) return null; // Se não houver modalType, não renderiza nada

  return (
    <section className={styles.modalBackround}>
      <div className={styles.modalCancel}>
        <h3>{modalMessages[modalType]}</h3>
        <div>
            <button className={styles.edit} type="button" onClick={onClose}>
                {modalType === "motive" ? "Fechar" : "Continuar Editando"}
            </button>
            <button className={styles.clean} type="button" onClick={onClose}>
                {
                    modalType === "clearFields" ? "Sim, limpar" :
                    modalType === "deleteRow" ? "Sim, excluir" :
                    modalType === "cancelRequest" ? "Sim, cancelar" :
                    "Fechar"
                }
            </button>
        
        </div>
      </div>
    </section>
  );
}
