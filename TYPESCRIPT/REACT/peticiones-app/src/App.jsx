import "./App.css";
import { ListCharacter } from "./views/listCharacter/listCharacter";
import { FavoritesDataProvider } from "./context/FavoritesContext";
import { BrowserRouter, Route, Routes } from 'react-router'
import { Sesion } from "./views/sesion/Sesion";
import { Link } from "react-router";

//Asincronismo maneja codigo que se tarda en cumplirse como solicitu a un servidor
//Promesa la esperanza

function App() {
  return (
    <>
      {/* Activamos React Router  */}
      <FavoritesDataProvider>
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<ListCharacter/>}/>
          <Route path="/sesion" element={<Sesion/>} />
        </Routes>
      </BrowserRouter>
         
      </FavoritesDataProvider>
    </>
  );
}

export default App;
