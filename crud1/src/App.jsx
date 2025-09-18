import { Crud } from "./views/crud/crud"


function App() {
  const variable = import.meta.env.VITE_NUMERO;
 

  return (
    <>
      

       <Crud /> 
       
    </>
  )
}

export default App
