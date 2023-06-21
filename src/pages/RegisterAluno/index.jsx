
import { useState } from 'react'
import "../../index.css"
import api from '../../services/api'

const RegisterAluno = () => {
    const [payload, setPayload] = useState({
        nome: "",
        dataNascimento: "2000-01-01",
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
        cpf: "",
        senha: "",
        urlComprovanteMatri: ""
    })
    const handleInputChange = (event) => {
        setPayload({
            ...payload,
            [event.target.name]: event.target.value
        })
    }

    async function RegistreSe(e) {
        e.preventDefault()
        const res = await api.post("/alunos/cadastrar", payload)

        console.log(res)
    }
    return (

        <div className="container">
            <div className="register-form">
                <div className="tittle">Registrar aluno</div>
                <form onSubmit={RegistreSe}>

                    <div className="input-box">
                        <i className="fa fa-envelope"></i>
                        <input onChange={handleInputChange} name="nome" type="text" placeholder="Nome completo" required />
                    </div>
                    <div className="input-box">
                        <i className="fa fa-envelope"></i>
                        <input onChange={handleInputChange} name="cpf" type="number" placeholder="CPF" required />
                    </div>
                    <div className="input-box">
                        <i className="fa fa-envelope"></i>
                        <input onChange={handleInputChange} name="urlComprovanteMatri" type="text" placeholder="Matrícula" required />
                    </div>
                    <div className="input-box">
                        <i className="fa fa-envelope"></i>
                        <input onChange={handleInputChange} name="email" type="email" placeholder="E-mail" required />
                    </div>
                    <div className="input-box">
                        <i className="fa fa-envelope"></i>
                        <input onChange={handleInputChange} name="dataNascimento" type="date" placeholder="Data de nascimento"  />
                    </div>
                    <div className="input-box">
                        <i className="fa fa1-lock"></i>
                        <input onChange={handleInputChange} name="telefone" type="phone" placeholder="Insira seu telefone" required />
                    </div>
                    <div className="input-box">
                        <i className="fa fa1-lock"></i>
                        <input onChange={handleInputChange} name="senha" type="password" placeholder="Digite sua senha" required />
                    </div>
                    <div className="input-box">
                        <i className="fa fa1-lock"></i>
                        <input onChange={handleInputChange} name="" type="password" placeholder="Confirme sua senha" required />
                    </div>
                    <div className="input-box">
                        <i className="fa fa-envelope"></i>
                        <input onChange={handleInputChange} name="cep" type="number" placeholder="Cep" required />
                    </div>
                    <div className="input-box">
                        <i className="fa fa-envelope"></i>
                        <input onChange={handleInputChange} name="logradouro" type="text" placeholder="Logradouro" required />
                    </div>
                    <div className="input-box">
                        <i className="fa fa-envelope"></i>
                        <input onChange={handleInputChange} name="numero" type="number" placeholder="Numero" required />
                    </div>
                    <div className="input-box">
                        <i className="fa fa-envelope"></i>
                        <input onChange={handleInputChange} name="complemento" type="text" placeholder="Complemento" required />
                    </div>
                    <div className="input-box">
                        <i className="fa fa-envelope"></i>
                        <input onChange={handleInputChange} name="bairro" type="text" placeholder="Bairro" required />
                    </div>
                    <div className="input-box">
                        <i className="fa fa-envelope"></i>
                        <input onChange={handleInputChange} name="cidade" type="text" placeholder="Cidade" required />
                    </div>
                    <div className="input-box">
                        <i className="fa fa-envelope"></i>
                        <input onChange={handleInputChange} name="estado" type="text" placeholder="Estado" required />
                    </div>
                    <div className="input-box">
                        <i className="fa fa-envelope"></i>
                        <input onChange={handleInputChange} name="nacionalidade" type="text" placeholder="Nacionalidade" required />
                    </div>
                    <div className="input-box">
                        <i className="fa fa-envelope"></i>
                        <input onChange={handleInputChange} name="responsavel" type="text" placeholder="Responsavel" required />
                    </div>
                    <div className="submit-box">
                        <input type="submit" value="Registrar" />
                    </div>

                </form>

            </div>


        </div>
    )
}
export default RegisterAluno