import Saludo from './components/Saludo'
import './App.css'

function App() {
  let nombres = ['Juan', 'Pablo', "Maria"];

  return (
    <> { /* Este es un fragmento */ } 
     {/* <Saludo nombre='Jhon'/> */}
    {nombres.map((nombre, id) => <Saludo key={id} nombre={nombre}/>)}

     {/* Este es el primer componenete */}
    </>
  )
}

export default App

