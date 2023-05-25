import React, { Fragment, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Login = () => {

    const [showModal, setShowModal] = useState(false)


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
            Não possui uma conta? 
            <span onClick={ () => setShowModal(!showModal)}>
            Crie agora
            </span>

                </div>
            </form>
            {showModal && (
                <div className='modal'>
                <div className="card">
                    
                    <img className='background' src="/assets/background-select.png" alt="" />
                    <img className='img-background' src="/assets/icon-background.svg" alt="" />
                    <div className="card-title">
                        <h1>Selecione o tipo de conta</h1>
                    </div>

                    <Link className='a-link' to="/register/aluno">
                    <button className='btn'>
                        Aluno
                    </button>
                    </Link>

                    <Link className='a-link' to="/register/anfitriao">
                    <button className='btn'>
                        Anfitrião
                    </button>
                    </Link>
                    
                    

                </div>    
                </div>
                )}
        </div>
        <div className="login-img">
            <img src="/assets/friendly.svg" width="100%" />
            </div>
            </div>
)   }
export default Login