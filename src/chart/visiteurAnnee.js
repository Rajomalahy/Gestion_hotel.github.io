import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

const VisiteurAnnee = () => {
    const [visiteurAnnee, setVisiteurAnnee] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/chart/visiteurAnnee')
        .then(res => setVisiteurAnnee(res.data))
        .catch(err => console.log(err))
    }, [])

    const annee = visiteurAnnee.map(item => ({
        // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
        name : item.annee_visite, 
        uv : item.id_visiteur
    }))

    return (
       <div className='container_visiteurAnnee'>
            <LineChart width={560} height={350} data={annee} >
                <Line type="monotone" dataKey="uv" stroke="orange" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <XAxis dataKey="effectif" />
                <Tooltip />
            </LineChart>
       </div>
    )
}

export default VisiteurAnnee;