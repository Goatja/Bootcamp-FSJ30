
import { BrowserRouter } from 'react-router'
import LoginComponent from './views/login/LoginComponent'
import { Products } from './views/products/Products'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <h1>Holiiwins</h1>
      
        <LoginComponent />
        <Products />
      </BrowserRouter>
    </>
  )
}

export default App
