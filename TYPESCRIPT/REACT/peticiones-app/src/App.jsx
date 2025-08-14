import { useState } from "react";
import "./App.css";

//Asincronismo maneja codigo que se tarda en cumplirse como solicitu a un servidor
//Promesa la esperanza

function App() {
   const [pokeName, setPokeName] = useState('Jujubee')
  //Siempre poner camelCase
  const peticionApi = () => {
    //peticion a una API
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  const peticionApiAA = async () => {
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
      //console.log(response);
      let data = await response.json();
      console.log(setPokeName(data.name));
      
    } catch (e) {
      console.log(e);
    }
  };

 

  return (
    <>
      <h1>Hello</h1>
      <h2>{pokeName}</h2>
      <button onClick={peticionApi}>Apretame para traer datos</button>
      <button onClick={peticionApiAA}>
        Apretame para mostrar ditto
      </button>
    </>
  );
}

export default App;
