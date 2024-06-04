import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
 import './table.css';
 import { useNavigate } from "react-router-dom";

function Table (){
    const [table, setTable] = useState([])

        useEffect(()=>{
            axios.get('http://localhost:8081/table')
            .then(res => setTable(res.data))
            .catch(err => console.log(err))
        }, [])

    const handleDelete = async(id) => {
        try{
            await axios.delete('http://localhost:8081/table/'+ id)
            window.location.reload();
        }catch(err){
            console.log('err')
        }
    }

    //ajout
    const [num_table, setNumero] = useState('')
    const [desc_table, setDescription] = useState('')
    const [id_resto, setRestaurant] = useState('')
    // const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault();

        if (!num_table || !desc_table || !id_resto) {
            alert("Tous les champs doivent être remplis.");
            return;
        }

        console.log("Sending data:", { num_table, desc_table, id_resto });
        axios.post('http://localhost:8081/Table', {num_table,desc_table,id_resto})
        .then(res =>{
            console.log(res);
            // window.location.reload();
            // navigate('/');
        }).catch(err => {
            if (err.response) {
                console.error("Server responded with an error:", err.response.data);
                alert("Erreur du serveur: " + JSON.stringify(err.response.data));
            } else if (err.request) {
                console.error("No response received:", err.request);
                alert("Aucune réponse reçue du serveur.");
            } else {
                console.error("Error setting up the request:", err.message);
                alert("Erreur lors de la configuration de la requête: " + err.message);
            }
        });
    }
    //ajout

    return( 
        <div className="table">
            <div className="table_ajout">
                <form onSubmit={handleSubmit}>
                    <h2>Enregistrement</h2>
                    <label>Numero de la table</label>
                    <input type="number" placeholder="numero" onChange={e => setNumero(e.target.value)} />

                    <label>Prix</label>
                    <input type="text" placeholder="description" onChange={e => setDescription(e.target.value)} />

                    <label>Categorie</label>
                    <input type="number" placeholder="numero de la restaurant" onChange={e => setRestaurant(e.target.value)} />

                    <button className="btn_table">Ajouter</button>
                </form>
            </div>
            <div className="container_table">
                    <table className="table_table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Numero</th>
                                <th>Description</th>
                                <th>Numéro du Restaurant</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table.map((data,i) =>{
                                return <tr key={i}>
                                    <td>{data.id_table}</td>
                                    <td>{data.num_table}</td>
                                    <td>{data.desc_table}</td>
                                    <td>{data.id_resto}</td>
                                    <td>
                                        <div className="table_action">
                                            <Link className="modiftable_action" to={`modifierTable/${data.id_table}`}>Modifier</Link>
                                            <button className="suptable_action" onClick={e => handleDelete(data.id_table)} >Supprimer</button>
                                        </div>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
            </div>
        </div>
    )
}

export default Table;