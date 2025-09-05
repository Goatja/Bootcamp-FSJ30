import { useState } from "react"
import { LoginComponents } from "./components/LoginComponents"
import { Register } from "./components/Register"


export const Sesion = () => {
  const [typeForm, setTypeForm] = useState('login');
  return (
    <div className="row justify-content-center">
     
     <button className="btn-success col-3 m-2" onClick={() => setTypeForm('login')}>Login</button>
     <button className="btn-info col-3 m-2" onClick={() => setTypeForm('register')}>Register</button>
      
      {typeForm === 'login'? <LoginComponents />: <Register />}
       
    </div>
  )
}
