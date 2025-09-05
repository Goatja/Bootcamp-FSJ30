
import { BrowserRouter, Routes, Route } from 'react-router'
import { NavBar } from './nav/NavBar'
import { Home } from './views/home/Home'
import LoginComponent from './views/login/LoginComponent'
import { DashBoard } from './views/dashboard/DashBoard'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
          <Route path='/dashboard' element={<DashBoard />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
