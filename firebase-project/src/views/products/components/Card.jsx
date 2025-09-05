

export const Card = ({ nombre, precio, stock, id }) => {
  return (
    <div  className="card rounded shadow p-3 mb-5 bg-body-tertiary" style={{ width: '18rem' }}>
     <div className="card-head">
      <img src={`https://picsum.photos/200?random=${id}`} className="card-img-top" alt={nombre} />
     </div>
      <br />
      <h5 className={`card-title`}>{nombre.toUpperCase()}</h5>
      <p className={`card-text ${precio > 0 ? "text-success" : "text-danger"}`}>
        Precio: ${precio === 0 ? "Gratis" : precio}
      </p>
      <p className={`card-text ${stock <= 0 ? "text-danger" : "text-success"}`}> {stock > 0 ? "En" : "Sin"} Stock: {stock}</p>
    </div>
  )
}
