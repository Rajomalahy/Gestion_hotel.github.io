import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import './statistique.css';

const Statistique_chambre = () => {

    const [reservation_chambre, setReservation_chambre] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/chart/Statistique_chambre')
        .then(res => setReservation_chambre(res.data))
        .catch(err => console.log(err))
    }, [])

    const data = reservation_chambre.map(item =>({
        // [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
        name : item.date_debut,
        uv : item.date_debut,
        pv : item.id_reservation_chambre ,
        effectif:item.id_reservation_chambre
    }))

  return (
    <div>
        <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" stroke="red" />
        <YAxis dataKey="effectif"/>
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="uv" fill="red" barSize={30} />
        <Bar dataKey="pv" fill="orange" barSize={30} />
        </BarChart>
    </div>
  )
}

export default Statistique_chambre