import { toast, ToastContainer } from "react-toastify";
import Construction from "../../components/construction/Construction"
import styles from "./ReembolsoAdm.module.scss"
import { useEffect } from "react";

const ReembolsoAdm = () => {
    function initial() {
        toast.info("Essa page está em desenvolvimento :)");
      }
    
      useEffect(() => {
        initial()
      }, [])

    return (
        <main className={styles.bgReembolsoAdm}>
            <Construction />
            <ToastContainer position="top-right" autoClose={3000} />
        </main>
        
    )
    
}

export default ReembolsoAdm