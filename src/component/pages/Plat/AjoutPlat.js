import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AjoutPlat() {
    const [nom, setNom] = useState('')
    const [prix, setPrix] = useState('')
    const [categorie, setCategorie] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/AjoutPlat', {nom_plat,prix_plat,id_categorie})
        .then(res =>{
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }

    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Enregistrement</h2>
                    <label>Nom</label>
                    <input type="text" placeholder="entrer votre nom" onChange={e => setNom(e.target.value)} />

                    <label>Prix</label>
                    <input type="number" placeholder="entrer le prix" onChange={e => setPrix(e.target.value)} />

                    <label>Categorie</label>
                    <input type="number" placeholder="numero de categorie" onChange={e => setCategorie(e.target.value)} />

                    <button>Ajouter</button>
                </form>
            </div>
        </div>
    )
}

export default AjoutPlat;