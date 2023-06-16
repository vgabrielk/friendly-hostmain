import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import imgEmail from "/assets/email.png"
import imgLock from "/assets/senha-icon.png"
import imgBackground from "/assets/background-select.png"
import iconFriendly from "/assets/friendly.svg"

const Login = () => {

    const [showModal, setShowModal] = useState(false)


  return (

    <div className="container">
        <div className="login-form">
            <div className="tittle">Faça Seu Login</div>
            <form action="#">

                <div className="input-box">
                    <i className="fa fa-envelope"></i>
                    <input type="text" placeholder="Digite seu email" required/> 
                    <img src={imgEmail} alt="" />            
                </div>

                <div className="input-box">
                    <i className="fa fa-lock"></i>
                    <input type="password" placeholder="Digite sua senha" required/>
                    <img src={imgLock} alt="" />
                </div>
                <div className='inputLembrar'>
                <div className="forgot"> <a href="#">Esqueceu a senha?</a> </div>
                <input  type="checkbox" id='lembrarDmim' name='lembrar' />
                <label  htmlFor="lembrarDmim">Lembrar De Mim</label>
                </div>
                <div className="input-box">
                    <input type="submit" value="Entrar" />
                </div>
                <div className="sigup-text">
            Não possui uma conta? 
            {/* <span onClick={ () => setShowModal(!showModal)}>
            Crie agora
            </span> */}

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
            <img className='iconFriendly' src={iconFriendly} alt="" />
            <img src={imgBackground} width="100%" />
            <div className='content-text'>
                <h1>Seja Bem Vindo</h1>
                <p>INSIRA SEUS DADOS E REALIZE O SEU CADASTRO</p>
            <button onClick={ () => setShowModal(!showModal)}>REGISTRE-SE</button>
            </div>
        </div>
    </div>
)   }
export default Login