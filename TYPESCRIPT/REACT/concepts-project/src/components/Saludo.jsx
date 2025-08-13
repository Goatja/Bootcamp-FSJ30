//Crear nuestro primer componente

import { useState } from "react"
import { Check } from "./check";

//Props => Propiedades
function Saludo({nombre, apelllido}){
//const {nombre, apelllido} = props
//let curso = 'JSF30' no funciona...

//Reemplazo de las variables para manipular datos en REACT
//EL ESTADO -> Funciones pre hechas que ya vienen con React
const [nombreCurso, setNombreCurso] = useState('JSJ30');

  return (
  <>
     <h1>Hola, {nombre} {apelllido}.</h1>
     <h2>Curso: {nombreCurso}</h2>
     <button onClick={ () => setNombreCurso("Java30")}>Magia</button>
    <Check nombre={nombre} curso={nombreCurso}/>
    <br/>
  </>
  )
}

export default Saludo