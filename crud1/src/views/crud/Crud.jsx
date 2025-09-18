import { useEffect, useState } from "react"



export const Crud = () => {
    const URL = 'http://localhost:3001/api/tasks';

    const [datos, setDatos] = useState([]);
    const [msg, setMsg] = useState({} || "");

  
    useEffect(() => {
        fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: null
        })
        .then(response => response.json())
        .then(data => setDatos(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    console.log(datos);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(newTask => {
            setDatos(prevDatos => [...prevDatos, newTask]);
        })
        .catch(error => console.error('Error adding task:', error));
    };


    function eliminar (id) {

        fetch(`${URL}/${id}`, {
            method:"DELETE"
        })
        .then(response => response.json())
        .then(data => setMsg(data.message))
        .catch(e => console.log(e))
       
    }

   

    return (
    <div>crud
        <h1>CRUD 1</h1>
        <p>Create, Read, Update, Delete operations</p>
        <p>{msg === "" ? "Mensaje aqui" : msg }</p>
        <ul>
        {datos.map(item => (
            <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button onClick={ () => eliminar(item.id)}> Eliminar</button>
            </li>
        ))}
        </ul>

        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" required />
            <input type="text" name="description" placeholder="Description" required />
            <button type="submit">Add Task</button>
        </form>
    </div>
  )
}
