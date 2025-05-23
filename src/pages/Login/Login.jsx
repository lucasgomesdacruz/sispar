import styles from "./Login.module.scss";

import logo from "../../assets/images/TelaLogin/logo.png";

import Button from "../../components/button/Button.jsx";
import Input from "../../components/Input/Input.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import Api from "../../Services/Api.jsx";


function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const fazerLogin = async (e) => {
    e.preventDefault()

    if (!email || !senha) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    try {

      const resposta = await Api.post("/colaborador/login", {
        "email": email,
        "senha": senha
      }, {
        withCredentials: true
      })
      document.cookie = "cross-site-cookie=1; SameSite=None; Secure";

      console.log(resposta.data) // 
      toast.success("Login feito com sucesso!");
      navigate("/dashboard")
      

    } catch(error) {
      console.log("Erro ao fazer o Login:", error)
      // toast.error("erro Usuario não encontrado")

      if (error.response && error.response.status === 401) {
        toast.error("Senha incorreta. Tente novamente.");
      } else if (error.response && error.response.status === 404) {
        toast.error("Usuário não encontrado. Verifique seu email.");
      } else {
        toast.error("Erro ao fazer login. Tente novamente.");
      }

    }
  };
  
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

          <form className={styles.form} onSubmit={fazerLogin}> 
            <fieldset>
              <Input placeholder="Email" type="email" value={email} onChange={ (e) => setEmail(e.target.value) }/>
              <Input placeholder="Senha" type="password" value={senha} onChange={ (e) => setSenha(e.target.value) } />
              <Link to="/recuperarSenha" href="#" className={styles.Password}>Esqueci minha senha</Link>

              <div className={styles.buttonGroup}>
                <Button text="Entrar" type="submit" className={styles.btnDark}/>
                <Link to="/criarConta" className={styles.btnPrimary}> Criar Conta</Link>
              </div>
            </fieldset>
          </form>
          
        </section>
        <ToastContainer position="top-right" autoClose={3000} />
      </main>
    </>
  );
}

export default Login;