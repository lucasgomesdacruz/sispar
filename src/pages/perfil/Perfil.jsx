import { FaUserCircle } from "react-icons/fa"
import styles from "./Perfil.module.scss"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../Services/Api";

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
                      id: response.data.id,
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
    <main className={styles.perfil}>
        <section className={styles.userInfo}>
              <FaUserCircle />
              <h2>{userData.nome || "Usuário"}</h2>
              <p>{userData.cargo || "Cargo"}</p>
              <Link to="perfil">Perfil</Link>
              {/* Se precisar mostrar o ID */}
              <p>ID: {userData.id}</p>      
          </section>

    </main>
    
  )
}

export default Perfil