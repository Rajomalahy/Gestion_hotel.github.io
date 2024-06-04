import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import './table.css';

function ModifierTable() {

    const [num_table, setNum_table] = useState('')
    const [desc_table, setDesc_table] = useState('')
    const [id_resto, setId_resto] = useState('')
    const {id_table} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8081/table/${id_table}`)
            .then(res => {
                setNum_table(res.data.num_table)
                setDesc_table(res.data.desc_table)
                setId_resto(res.data.id_resto)
            })
            .catch(err => console.log(err));
    }, [id_table]);

    function handleSubmit(event){
        event.preventDefault();
        axios.put(`http://localhost:8081/modifierTable/${id_table}`, {num_table,desc_table,id_resto})
        .then(res =>{
            console.log(res);
            navigate('/table');
        }).catch(err => console.log(err));
    }

    return(
        <div>
            <div className="modifier_table">
                <form onSubmit={handleSubmit}>
                    <h2>Modification</h2>
                    <label>Numero de la table</label>
                    <input type="number" placeholder="numero" value={num_table} onChange={e => setNum_table(e.target.value)} />

                    <label>Prix</label>
                    <input type="text" placeholder="description" value={desc_table} onChange={e => setDesc_table(e.target.value)} />

                    <label>Categorie</label>
                    <input type="number" placeholder="numero de la restaurant" value={id_resto} onChange={e => setId_resto(e.target.value)} />

                    <button>Modifier</button>
                </form>
            </div>
        </div>
    )
}

export default ModifierTable;