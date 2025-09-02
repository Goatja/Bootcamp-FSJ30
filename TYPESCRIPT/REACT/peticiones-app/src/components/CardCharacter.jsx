

export const CardCharacter = ({id, name, image, status, listFavorites, changeFavorites}) => {

  /*Parte de logica para poder utilizar la lista de favoritos  */
  
const handleAddFavorites = () => {
  //Logica para guardar favoritos
  //Se da con CallBack => Mantener los valores anteriores y agregarlr
  // [...prevArray] ...Spread operator, los 3 valores puntitoe le dice que  saque lo que ya estaba 
  //en el array anterior y guarda
  changeFavorites( prevArray => [...prevArray, {id, name, image,status}])

  console.log(listFavorites);
  
  
}

const handleDeleteToFavorites = () => {
  changeFavorites(listFavorites.filter( favorite => favorite.id !== id ));
  
}

const findCharacterInFavorites = () => {
  return listFavorites.find( favorite => favorite.id == id)
}


  return (
        <div className="card" style={{width: '18rem;'}}>
            <img src={image} className="card-img-top h-50" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{status}</p>
                {findCharacterInFavorites() ? <button className="btn btn-danger" onClick={handleDeleteToFavorites}>Delete Favorites</button>
                 : <button className="btn btn-primary" onClick={handleAddFavorites}>Add to Favorites</button> }
            </div>
         </div>
  )
}

 