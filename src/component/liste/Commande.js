import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Commande.css';

function ListeCommande() {
    const [commande, setCommande] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/liste/Commande')
        .then(res => setCommande(res.data))
        .catch(err => console.log(err))
    }, [])

    return( 
        <div>
            <div className='container_commande'>
                <div className='titre_commande'>
                    <h4>Liste de commande</h4>
                </div>
                <table className='table_commande'>
                    <thead>
                        <tr>
                            <th> Numero de la categorie</th>
                            <th>Date de livraison</th>
                            <th>Lieu</th>
                            <th>Numéro du client</th>
                        </tr>
                    </thead>
                    <tbody>
                        {commande.map((data,i) =>{
                            return <tr key={i}>
                                <td>{data.id_commande}</td>
                                <td>{data.date_livraison}</td>
                                <td>{data.Lieu}</td>
                                <td>{data.id_client}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListeCommande;