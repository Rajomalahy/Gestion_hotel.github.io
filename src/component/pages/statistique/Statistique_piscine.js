import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import './statistique.css';

const Statistique_piscine = () => {

    const [reservation_piscine, setReservation_piscine] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/chart/Statistique_piscine')
        .then(res => setReservation_piscine(res.data))
        .catch(err => console.log(err))
    }, [])

    const data = reservation_piscine.map(item =>({
        // [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
        name : item.date_piscine,
        uv : item.date_piscine,
        pv : item.id_reservation_piscine ,
        effectif:item.id_reservation_piscine 
    }))

  return (
    <div>
        <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" stroke="red" />
        <YAxis dataKey="effectif"/>
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="uv" fill="orange" barSize={30} />
        <Bar dataKey="pv" fill="green" barSize={30} />
        </BarChart>
    </div>
  )
}

export default Statistique_piscine