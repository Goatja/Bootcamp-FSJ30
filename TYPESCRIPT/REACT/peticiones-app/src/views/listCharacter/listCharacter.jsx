//rafc Snipet para crear el componente funcional con flecha

import { useContext, useEffect, useState } from "react";
import { CardCharacter } from "../../components/CardCharacter";
import { FavoritesContext } from "../../context/FavoritesContext";
import { NavBar } from "../../components/nav/NavBar";

export const ListCharacter = () => {
  //Siempre que se necesite una caja para Guardar algo se va hacer un ESTADO
  const [listCharacters, setListCharacters] = useState([]);

// Utilizamos el useContext -> Hook para utilizar un contexto con camelCase
//Sintaxis cuando solo tenemos un solo valor en el contexto.
/* let valorContexto = useContext(FavoritesContext);
console.log(valorContexto); */

const {favoritos, setFavoritos} = useContext(FavoritesContext)



console.log(favoritos);

  

  //Siempre poner camelCase
  const peticionApi = () => {
    //peticion a una API
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setListCharacters(data.results);
      })
      .catch((e) => console.log(e));
  };

  const peticionApiAA = async () => {
    try {
      let response = await fetch(`https://rickandmortyapi.com/api/character`);
      //console.log(response);
      let data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  //useEfect => Cuando nececito cargar datos apenas s vaya a montar el componente
  useEffect(() => {
    peticionApi();
  }, []);

  return (
    <>
    <NavBar/>
      List Character
      {/**Recorer el arr para mostrar los datos => Mapear los datos para pintarlos  */}
     <section className="row">

      {listCharacters.map((char) => {
        return (
          <section key={char.id}  className="col-md-4 col-lg-4 col-sm-12">

            <CardCharacter
            id={char.id} 
            name={char.name}
            image={char.image} 
            status={char.status}
            listFavorites = {favoritos}
            changeFavorites = {setFavoritos} 
            />
          </section>
        );
      })}
     </section>
    </>
  );
};
