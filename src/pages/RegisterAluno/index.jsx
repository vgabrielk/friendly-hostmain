import React from 'react'
import { Link } from 'react-router-dom'
import "../../index.css"

const RegisterAluno = () => {
  return (

    <div className="container">
        <div className="register-form">
            <div className="tittle">Registrar aluno</div>
            <form action="#">

                <div className="input-box">
                    <i className="fa fa-envelope"></i>
                    <input type="text" placeholder="Nome completo" required/>
                </div>
                <div className="input-box">
                    <i className="fa fa-envelope"></i>
                    <input type="number" placeholder="CPF" required/>
                </div>
                <div className="input-box">
                    <i className="fa fa-envelope"></i>
                    <input type="text" placeholder="Matrícula" required/>
                </div>
                <div className="input-box">
                    <i className="fa fa-envelope"></i>
                    <input type="email" placeholder="E-mail" required/>
                </div>
                <div className="input-box">
                    <i className="fa fa-envelope"></i>
                    <input type="date" placeholder="Data de nascimento" required/>
                </div>
                <div className="input-box">
                    <i className="fa fa1-lock"></i>
                    <input type="phone" placeholder="Insira seu telefone" required/>
                </div>
                <div className="input-box">
                    <i className="fa fa1-lock"></i>
                    <input type="password" placeholder="Digite sua senha" required/>
                </div>
                <div className="input-box">
                    <i className="fa fa1-lock"></i>
                    <input type="password" placeholder="Confirme sua senha" required/>
                </div>
            </form>
                <div className="submit-box">
                    <input type="submit" value="Registrar" />
                </div>
        </div>
       
            </div>
)   }
export default RegisterAluno