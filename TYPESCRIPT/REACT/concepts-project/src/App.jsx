import Saludo from './components/Saludo'
import './App.css'

function App() {

  return (
    <> { /* Este es un fragmento */ } 
     {/* <Saludo nombre='Jhon'/> */}
     <Saludo key={1} nombre='Michael' apelllido='McDonalds'/>

     {/* Este es el primer componenete */}
    </>
  )
}

export default App
