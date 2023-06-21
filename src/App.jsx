import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import RegisterAluno from './pages/RegisterAluno'
import RegisterAnfitriao from './pages/RegisterAnfitriao'
import MainPage from './pages/MainPage'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register/aluno' element={<RegisterAluno />} />
            <Route path='/register/anfitriao' element={<RegisterAnfitriao />} />
            <Route path = '/home' element={<MainPage/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
