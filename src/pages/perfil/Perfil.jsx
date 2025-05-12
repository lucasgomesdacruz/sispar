import { FaUserCircle } from "react-icons/fa"
import styles from "./Perfil.module.scss"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../Services/Api";
import { BsPencilSquare } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Perfil = () => {

  const [userData, setUserData] = useState({ id: '', nome: '', cargo: '' });
  
      useEffect(() => {
          async function fetchPerfil() {
              try {
                  const response = await Api.get("colaborador/perfil", {
                      withCredentials: true,
                  });
                  // Atualiza o estado com os dados retornados pela API, incluindo o ID
                  setUserData({
                      nome: response.data.nome,
                      cargo: response.data.cargo
                  });
              } catch (error) {
                  console.error("Erro ao carregar perfil:", error);
              }
          }
  
          fetchPerfil();
      }, []);

  return (
    <>
        <Helmet>
            <title>Perfil | SISPAR</title>
            <meta name="description" content="Perfil | SISPAR" />
        </Helmet>
        <main className={styles.perfil}>
            <section className={styles.userInfo}>
                <FaUserCircle />
                <h2>{userData.nome || "Usuário"}</h2>
                <p>{userData.cargo || "Cargo"}</p>
                <BsPencilSquare  className={styles.edit} onClick={() => toast.info("Ainda estamos desenvolvendo essa funcionalidade")}/>

            </section>
            <ToastContainer position="top-center" autoClose={3000} />

        </main>
    </>
    
    
  )
}

export default Perfil