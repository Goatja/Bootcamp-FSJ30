import { useState } from "react";
import { useForm } from "react-hook-form";
import { CardCharacter } from "../../components/CardCharacter";


const API_URL = 'https://rickandmortyapi.com/api/character/?name=';

export const SearchCharacter = () => {

    const {register, handleSubmit} = useForm();

    const [character, setCharacter] = useState({});

    const onSubmitForm = ( {name} ) => {
        console.log(name);  
        fetch(`${API_URL}${name}`)
        .then(res => res.json())
        .then(data => setCharacter(data.results[0]));
        
    }

  return (
    <div>

        <div className="card">
            <div className="card-body m-1">
                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <label htmlFor="name" className="form-label">Name Character</label>
                    <input className="form-control" type="text" name="name" id="" placeholder="Search Character" {...register('name')} />
                    <button className="btn btn-primary">Search</button>
                </form>
            </div>
        </div>

    {character.name == ""? null:

        <CardCharacter 

        id={character.id}
        name={character.name} 
        image={character.image}
        
        />
    }
    </div>
  )
}
