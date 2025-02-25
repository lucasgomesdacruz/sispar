import styles from "./Login.module.scss";

import logo from "../../assets/images/TelaLogin/logo.png";

import Button from "../../components/button/Button.jsx";
import Input from "../../components/Input/Input.jsx";
import { Link, useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    navigate("/dashboard")
  }
  
  return (
    <main className={styles.container}>
      
      <section className={styles.imageContainer}></section>

      <section className={styles.formContainer}>

        <div className={styles.containerTitle}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>Boas vindas ao Novo Portal SISPAR</h1>
          <p className={styles.subtitle}>Sistema de Emissão de Boletos e Parcelamento</p>
        </div>
        
        <form className={styles.form} onSubmit={handleLogin}>
          <fieldset>
            <Input placeholder="Email" type="email" />
            <Input placeholder="Senha" type="password" />
            <Link to="/recuperarSenha" href="#" className={styles.Password}>Esqueci minha senha</Link>

            <div className={styles.buttonGroup}>
              <Button text="Entrar" type="submit" className={styles.btnDark} />
              <Link to="/criarConta" className={styles.btnPrimary}> Criar Conta</Link>
            </div>
          </fieldset>
        </form>
        
      </section>
    </main>
  );
}

export default Login;
