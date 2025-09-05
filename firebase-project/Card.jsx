

const Card = ({ nombre, precio, stock, image}) => (
    <div className="card m-2 rounded" style={{ width: '18rem' }}>
      {image && <img src={image} className="card-img-top" alt={nombre} />}
        <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">
               {precio === 0 ? <span className="text-danger">Sin precio</span> : <span className="text-success"><strong>Precio:</strong> ${precio}</span>} 
            </p>
            <p className="card-text">
               {stock === 0 ? <span className="text-danger">Sin stock</span> : <span className="text-success"><strong>Stock:</strong> {stock}</span>}
            </p>
        </div>
    </div>
);

export default Card;