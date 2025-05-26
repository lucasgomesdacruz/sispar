import styles from "./LoginAdm.module.scss";

import logo from "../../assets/images/TelaLogin/logo.png";

import Button from "../../components/button/Button.jsx";
import Input from "../../components/Input/Input.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { toast, ToastContainer } from "react-toastify";


function LoginAdm() {



  return (
    <>
      <Helmet>
          <title>Login | SISPAR</title>
          <meta
            name="description"
            content="Acesse sua conta no SISPAR para gerenciar seus reembolsos de forma fácil e segura."
          />
          <meta
            name="keywords"
            content="login, acesso, SISPAR, reembolso, autenticação"
          />
          <meta name="author" content="Nome da Empresa ou Seu Nome" />
          <meta name="robots" content="index, follow" />

          <meta property="og:title" content="Login | SISPAR" />
          <meta
            property="og:description"
            content="Acesse sua conta no SISPAR para gerenciar seus reembolsos de forma fácil e segura."
          />
          <meta property="og:image" content="URL_da_imagem_de_compartilhamento" />
          <meta property="og:url" content="URL_da_sua_página" />
          <meta property="og:type" content="website" />

          <meta name="twitter:title" content="Login | SISPAR" />
          <meta
            name="twitter:description"
            content="Acesse sua conta no SISPAR para gerenciar seus reembolsos de forma fácil e segura."
          />
          <meta name="twitter:image" content="URL_da_imagem_de_compartilhamento" />
          <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main className={styles.container}>
        
        <section className={styles.imageContainer}></section>

        <section className={styles.formContainer}>

          <div className={styles.containerTitle}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <h1 className={styles.title}>Boas vindas ao Novo Portal SISPAR</h1>
            <p className={styles.subtitle}>Sistema de Emissão de Boletos e Parcelamento</p>
          </div>

          <form className={styles.form}> 
            <fieldset>
              <Input placeholder="Email" type="email"/>
              <Input placeholder="Senha" type="password"/>

              <div className={styles.buttonGroup}>
                <Button text="Entrar" type="submit" className={styles.btnDark}/>
              </div>
              <Link to="/recuperarSenha" href="#" className={styles.Password}>Esqueci minha senha</Link>
              <Link to="/">
                <p>É usuário comum ? Acesse aqui</p>
              </Link>
            </fieldset>
          </form>
          
        </section>
        <ToastContainer position="top-right" autoClose={3000} />
      </main>
    </>
  );
}

export default LoginAdm;