import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './Plat.css';
 

function Plat (){
    const [plat, setPlat] = useState([])

    useEffect(() => {
        fetchPlat();
    }, []);

    const fetchPlat = () => {
        axios.get('http://localhost:8081/plat')
            .then(res => setPlat(res.data))
            .catch(err => console.log(err));
    };

        useEffect(()=>{
            axios.get('http://localhost:8081/plat')
            .then(res => setPlat(res.data))
            .catch(err => console.log(err))
        }, [])

    const handleDelete = async(id) => {
        try{
            await axios.delete('http://localhost:8081/plat/'+ id)
            fetchPlat(); 
            // window.location.reload();
        }catch(err){
            console.log('err')
        }
    }

    //ajout
    const [nom_plat, setNom] = useState('')
    const [prix_plat, setPrix] = useState('')
    const [id_categorie, setCategorie] = useState('')
    // const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault();

        console.log("Sending data:", { nom_plat, prix_plat, id_categorie });
        axios.post('http://localhost:8081/Plat', {nom_plat,prix_plat,id_categorie})
        .then(res =>{
            console.log(res);
            fetchPlat(); 
            // navigate('/');
        }).catch(err => {console.log(err)});
    }
    //ajout

    return( 
        <div className="container_plat">
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Enregistrement</h2>
                    <div className="plat_form">
                        <label>Nom</label>
                        <input type="text" placeholder="entrer votre nom" onChange={e => setNom(e.target.value)} />

                        <label>Prix</label>
                        <input type="number" placeholder="entrer le prix" onChange={e => setPrix(e.target.value)} />

                        <label>Categorie</label>
                        <input type="number" placeholder="numero de categorie" onChange={e => setCategorie(e.target.value)} />
                    </div>

                    <button className="btn_plat">Ajouter</button>
                </form>
            </div>
            <div className="table_plat">
                    <table>
                        <thead>
                            <tr>
                                <th>Plat</th>
                                <th>Nom</th>
                                <th>Prix</th>
                                <th>Categorie</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plat.map((data,i) =>{
                                return <tr key={i}>
                                    <td>{data.id_plat}</td>
                                    <td>{data.nom_plat}</td>
                                    <td>{data.prix_plat}</td>
                                    <td>{data.id_categorie}</td>
                                    <td>
                                        <Link className="modif_plat" to={`modifierPlat/${data.id_plat}`}>Modifier</Link>
                                        <button className="sup_plat" onClick={e => handleDelete(data.id_plat)} >Supprimer</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
            </div>
        </div>
    )
}

export default Plat;