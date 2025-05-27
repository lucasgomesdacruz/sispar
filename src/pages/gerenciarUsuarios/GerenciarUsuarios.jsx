import { toast, ToastContainer } from "react-toastify"
import Construction from "../../components/construction/Construction"
import styles from "./GerenciarUsuarios.module.scss"
import { useEffect } from "react";

const GerenciarUsuarios = () => {
    function initial() {
        toast.info("Essa page está em desenvolvimento :)");
    }

    useEffect(() => {
        initial()
    }, [])
    
    return (
        <div className={styles.bgGerenciarUsuarios}>
            <Construction />
            <ToastContainer position="top-right" autoClose={3000} />
        
        </div>
    )
}

export default GerenciarUsuarios
