import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import RegisterAluno from './pages/RegisterAluno'
import RegisterAnfitriao from './pages/RegisterAnfitriao'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register/aluno' element={<RegisterAluno />} />
            <Route path='/register/anfitriao' element={<RegisterAnfitriao />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
