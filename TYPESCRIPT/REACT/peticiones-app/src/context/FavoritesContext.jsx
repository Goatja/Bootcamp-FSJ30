/** Vamos a declarar 2 cosas a la vez */

import { createContext, useState } from "react";

//Crear el contexto

export const FavoritesContext = createContext();

//Proveedor de la informacion del contexto
//Wrapper -> Contiene otros componentes -> {children}
export const FavoritesDataProvider = ({children}) => {
//estado de los favoritos
const [favoritos, setFavoritos] = useState([]);

    return(
        <FavoritesContext.Provider value={{favoritos, setFavoritos}}>
            {children}
        </FavoritesContext.Provider>
    );
}