
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "../../index.css"
import api from '../../services/api'

const RegisterAluno = () => {
   const [payload, setPayLoad] = useState({
    nome: "",
        dataNascimento: "",
        email: "",
        telefone: "",
        cep: "",
        logradouro: "",
        numero: null,
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        nacionalidade: "",
        responsavel: "",
        cpf : "",
        senha : "",
        urlComprovanteMatri: ""
   })
    async function RegistreSe(){
       const res = await api.post("/alunos/cadastrar",{
        nome: "nicolau mil grau",
        dataNascimento: "2003-01-01",
        email: "nicolas.stevan@email.com",
        telefone: "(11) 1234-5678",
        cep: "12345-696",
        logradouro: "Rua A",
        numero: 10,
        complemento: "Apt. 123",
        bairro: "Centro",
        cidade: "São Paulo",
        estado: "SP",
        nacionalidade: "Brasileira",
        responsavel: "Maria da Silva",
        cpf : "10316333422",
        senha : "12345669",
        urlComprovanteMatri: "http://url.comprovante.com"
       })

       console.log(res)
    }
    return (

    <div className="container">
        <div className="register-form">
            <div className="tittle">Registrar aluno</div>
            <form>
                
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
                <div className="input-box">
                    <i className="fa fa-envelope"></i>
                    <input type="number" placeholder="cep" required/>
                </div>
                <div className="input-box">
                    <i className="fa fa-envelope"></i>
                    <input type="text" placeholder="logradouro" required/>
                </div>
                <div className="input-box">
                    <i className="fa fa-envelope"></i>
                    <input type="number" placeholder="numero" required/>
                </div>
                <div className="input-box">
                    <i className="fa fa-envelope"></i>
                    <input type="text" placeholder="complemento" required/>
                </div>
                <div className="input-box">
                    <i className="fa fa-envelope"></i>
                    <input type="text" placeholder="bairro" required/>
                </div>
                <div className="input-box">
                    <i className="fa fa-envelope"></i>
                    <input type="text" placeholder="cidade" required/>
                </div>
                <div className="input-box">
                    <i className="fa fa-envelope"></i>
                    <input type="text" placeholder="estado" required/>
                </div>
                <div className="input-box">
                    <i className="fa fa-envelope"></i>
                    <input type="text" placeholder="nacionalidade" required/>
                </div>
                <div className="input-box">
                    <i className="fa fa-envelope"></i>
                    <input type="text" placeholder="responsavel" required/>
                </div>
            </form>
                <div className="submit-box">
                    <input type="submit" value="Registrar" />
                </div>
        </div>

            
            </div>
)   }
export default RegisterAluno