import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

const ChartVisiteur = () =>{
    const [visiteur, setVisiteur] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/chart/visiteur')
        .then(res => setVisiteur(res.data))
        .catch(err => console.log(err))
    }, [])

const data = visiteur.map(item =>({
// [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
    name : item.mois_visite,
    uv : item.id_visiteur
}))

return(
    <BarChart width={560} height={350} data={data}>
    <XAxis dataKey="name" stroke="red" />
    <YAxis />
    <Tooltip />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="green" barSize={30} />
  </BarChart>
)
}  

export default ChartVisiteur;
