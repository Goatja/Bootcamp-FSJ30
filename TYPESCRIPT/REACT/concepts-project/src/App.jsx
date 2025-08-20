import Saludo from './components/Saludo'
import './App.css'
import { useState } from 'react'

function App() {
  const [isOline, setOnline] = useState(navigator.onLine);

  return (
    <> { /* Este es un fragmento */ } 
     {/* <Saludo nombre='Jhon'/> */}
     <Saludo key={1} nombre='Michael' apelllido='McDonalds'/>
    <h4>{isOline?'✅ Online':'❌ Offline'}</h4>
     {/* Este es el primer componenete */}
    </>
  )
}

export default App
