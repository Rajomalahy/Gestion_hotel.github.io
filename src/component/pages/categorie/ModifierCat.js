import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import './Categorie.css';

export default function ModifierCat() {
    
    const [nom, setNom] = useState('')
    const {id_categorie} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8081/categorie/${id_categorie}`)
            .then(res => setNom(res.data.nom))
            .catch(err => console.log(err));
    }, [id_categorie]);

    function handleSubmit(event){
        event.preventDefault();
        axios.put(`http://localhost:8081/categorie/${id_categorie}`, {nom})
        .then(res =>{
            console.log(res);
            navigate('/categorie');
        }).catch(err => console.log(err));
    }

  return (
    <div>
          <div className="container_modifCategorie">
            <div className="row_modifCategorie">
                <form onSubmit={handleSubmit}>
                    <h2>Modification</h2>
                    <label>Name</label>
                    <input type="text" placeholder="entrer votre nom" value={nom} onChange={e => setNom(e.target.value)} />
                    <button>Modifier</button>
                </form>
            </div>
        </div>
    </div>
  )
}
