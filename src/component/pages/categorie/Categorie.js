import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
 

function Categorie (){
    const [categorie, setCategorie] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        axios.get('http://localhost:8081/categorie')
            .then(res => setCategorie(res.data))
            .catch(err => console.log(err));
    };

    useEffect(()=>{
        axios.get('http://localhost:8081/categorie')
            .then(res => setCategorie(res.data))
            .catch(err => console.log(err))
    }, []);

    const handleDelete = async(id) => {
        try {
            await axios.delete('http://localhost:8081/categorie/'+ id)
            fetchCategories(); 
            // window.location.reload();
        } catch(err) {
            console.log('err')
        }
    }

    //ajout
    const [nom, setNom] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/Categorie', {nom})
        .then(res =>{
            console.log(res);
            fetchCategories(); 
            // navigate('Categorie');
        }).catch(err => console.log(err));
    }
     //ajout

    return( 
        <div className="container_categorie">

            <div className="container_ajoutCategorie">
                <div className="row_ajoutCategorie">
                    <form onSubmit={handleSubmit}>
                        <h2>Enregistrement</h2>
                        <div className="form_controlCat">
                            <label>Name</label>
                            <input type="text" placeholder="entrer votre nom" onChange={e => setNom(e.target.value)} />
                            <button className="btn">Ajouter</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="liste_categorie">
                <table className="table_categorie">
                    <thead>
                        <tr>
                            <th>Categorie</th>
                            <th>Nom</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorie.map((data,i) =>{
                            return <tr key={i}>
                                <td>{data.id_categorie}</td>
                                <td>{data.nom}</td>
                                <td>
                                    <Link className="modif_cat" to={`ModifierCat/${data.id_categorie}`}>Modifier</Link>
                                    <button className="btn_cat" onClick={e => handleDelete(data.id_categorie)} >Supprimer</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Categorie;
