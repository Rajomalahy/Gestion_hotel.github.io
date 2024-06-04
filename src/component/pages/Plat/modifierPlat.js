import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Plat.css';

function ModifierPlat() {
    const [nom_plat, setNom_plat] = useState('')
    const [prix_plat, setPrix_plat] = useState('')
    const [id_categorie, setId_categorie] = useState('')
    const {id_plat} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8081/plat/${id_plat}`)
            .then(res => {
                setNom_plat(res.data.nom_plat)
                setPrix_plat(res.data.prix_plat)
                setId_categorie(res.data.id_categorie)
            })
            .catch(err => console.log(err));
    }, [id_plat]);

    function handleSubmit(event){
        event.preventDefault();
        axios.put(`http://localhost:8081/modifierPlat/${id_plat}`, {nom_plat,prix_plat,id_categorie})
        .then(res =>{
            console.log(res);
            navigate('/plat');
        }).catch(err => console.log(err));
    }

    return(
        <div>
            <div className="modifier_plat">
                <form onSubmit={handleSubmit}>
                    <h2>Modification</h2>
                    <label>Nom</label>
                    <input type="text" placeholder="entrer votre nom" value={nom_plat} onChange={e => setNom_plat(e.target.value)} />

                    <label>Prix</label>
                    <input type="number" placeholder="entrer le prix" value={prix_plat} onChange={e => setPrix_plat(e.target.value)} />

                    <label>categorie</label>
                    <input type="number" placeholder="numero de categorie" value={id_categorie} onChange={e => setId_categorie(e.target.value)} />
                    <button>Modifier</button>
                </form>
            </div>
        </div>
    )
}

export default ModifierPlat;