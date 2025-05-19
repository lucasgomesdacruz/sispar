import { FaUserCircle } from "react-icons/fa";
import styles from "./Perfil.module.scss";
import { useEffect, useState } from "react";
import Api from "../../Services/Api";
import { BsPencilSquare } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { MdSave } from "react-icons/md";

const Perfil = () => {
  const [userData, setUserData] = useState({
    nome: "",
    cargo: "",
    email: "",
    senha: ""
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    async function fetchPerfil() {
      try {
        const response = await Api.get("colaborador/perfil", {
          withCredentials: true,
        });
        setUserData((prev) => ({
          ...prev,
          nome: response.data.nome,
          cargo: response.data.cargo,
          email: response.data.email || "",
        }));
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
      };

      // Envia senha apenas se não for vazia
      if (userData.senha.trim() !== "") {
        updateData.senha = userData.senha;
      }

      await Api.put(
        "colaborador/atualizar-perfil",
        updateData,
        { withCredentials: true }
      );

      toast.success("Perfil atualizado com sucesso!");
      setEditMode(false);
      setUserData((prev) => ({ ...prev, senha: "" }));
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
        <section className={styles.userInfo}>
          <FaUserCircle />
          {editMode ? (
            <>
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
                name="senha"
                type="password"
                value={userData.senha}
                onChange={handleChange}
                placeholder="Nova senha (opcional)"
              />
              <MdSave className={styles.edit} onClick={handleSave} />
            </>
          ) : (
            <>
              <h2>{userData.nome || "Usuário"}</h2>
              <p>{userData.cargo || "Cargo"}</p>
              {userData.email && <p>{userData.email}</p>}
              <BsPencilSquare
                className={styles.edit}
                onClick={() => setEditMode(true)}
              />
            </>
          )}
        </section>
        <ToastContainer position="top-center" autoClose={3000} />
      </main>
    </>
  );
};

export default Perfil;
