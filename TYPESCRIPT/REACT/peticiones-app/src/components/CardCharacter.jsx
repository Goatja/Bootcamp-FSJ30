

export const CardCharacter = ({name, image, status}) => {
  return (
        <div className="card" style={{width: '18rem;'}}>
            <img src={image} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{status}</p>
                <button href="#" className="btn btn-primary">Add to Favorites</button>
            </div>
         </div>
  )
}

