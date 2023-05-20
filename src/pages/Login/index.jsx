import React from 'react'
import './style.css'

const Login = () => {
  return (

    <div className="container">
        <div className="login-form">
            <div className="tittle">Login</div>
            <form action="#">

                <div className="input-box">
                    <i className="fa fa-envelope"></i>
                    <input type="text" placeholder="Digite seu email" required/>                </div>

                <div className="input-box">
                    <i className="fa fa-lock"></i>
                    <input type="password" placeholder="Digite sua senha" required/>
                </div>
                <div className="forgot"> <a href="#">Esqueceu a senha?</a> </div>
                <div className="input-box">
                    <input type="submit" value="Entrar" />
                </div>
                <div className="divider"> ou </div>
                <div className="medias-sociais">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-github"></i>
                </div>
                <div className="sigup-text">
            Não possui uma conta? <a href="#">Crie uma agora</a>

                </div>
            </form>

        </div>
        <div className="login-img">
            <img src="/assets/friendly.svg" width="100%" />
            </div>
            </div>
)   }
export default Login