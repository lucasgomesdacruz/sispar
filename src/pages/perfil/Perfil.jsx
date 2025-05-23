import { FaUserCircle } from "react-icons/fa";
import styles from "./Perfil.module.scss";
import { useEffect, useState } from "react";
import Api from "../../Services/Api";
import { BsPencilSquare } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { MdSave } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

const Perfil = () => {
  const [userData, setUserData] = useState({
    nome: "",
    cargo: "",
    email: ""
  });
    const [editMode, setEditMode] = useState(false);
    const navigate = useNavigate();

  useEffect(() => {
    async function fetchPerfil() {
      try {
        const response = await Api.get("colaborador/perfil", {
          withCredentials: true,
          credentials: 'include' 
        });
        setUserData({
          nome: response.data.nome,
          cargo: response.data.cargo,
          email: response.data.email || "",
        });
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
      }
    }

    fetchPerfil();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSave() {
    try {
      // Monta os dados a serem enviados
      const updateData = {
        nome: userData.nome,
        cargo: userData.cargo,
        email: userData.email
      };

      await Api.put(
        "colaborador/atualizar-perfil",
        updateData,
        { withCredentials: true }
      );

      toast.success("Perfil atualizado com sucesso!");
      toast.success("Faça o Login novamente!");

      setTimeout(() => {
        navigate("/"); 
      }, 2000);

      setEditMode(false);
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.mensagem || "Erro ao atualizar perfil"
      );
    }
  }

  return (
    <>
      <Helmet>
        <title>Perfil | SISPAR</title>
        <meta name="description" content="Perfil | SISPAR" />
      </Helmet>

      <main className={styles.perfil}>
        <h1>Seu perfil</h1>
        <section className={styles.userInfo}>
          <FaUserCircle />
          {editMode ? (
            <div className={styles.editando}>
              <input
                name="nome"
                value={userData.nome}
                onChange={handleChange}
                placeholder="Nome"
              />
              <input
                name="cargo"
                value={userData.cargo}
                onChange={handleChange}
                placeholder="Cargo"
              />
              <input
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            
              <Button onClick={handleSave} className={styles.buttonEditando} icon={<MdSave className={styles.icon}/> } text="Salvar Alteração" />
             
              <Button className={styles.buttonCancel} onClick={() => setEditMode(false)} title="Cancelar edição" icon="❌" text="Cancelar alteração" />
                  
            </div>
          ) : (
            <>
              <h2>{userData.nome || "Usuário"}</h2>
              <p>{userData.cargo || "Cargo"}</p>
              <p>{userData.email}</p>
              
              <Button onClick={() => setEditMode(true)} className={styles.edit} icon={<BsPencilSquare className={styles.icon}/>} text="Editar Perfil" />
            </>
          )}
        </section>
        <ToastContainer position="top-center" autoClose={3000} />
      </main>
    </>
  );
};

export default Perfil;
