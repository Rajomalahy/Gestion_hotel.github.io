import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './statistique.css';
import Statistique_salle from './Statistique_salle';
import Statistique_piscine from './Statistique_piscine';
import Statistique_chambre from './Statistique_chambre';

const MyChart = () => {

  const [reservation_table, setReservation_table] = useState([])
        useEffect(()=>{
            axios.get('http://localhost:8081/chart/statistique')
            .then(res => setReservation_table(res.data))
            .catch(err => console.log(err))
        }, [])

  const chartData = reservation_table.map(item =>({ 
       name: item.datee ,
       uv : item.datee,
       pv: item.id_reservation_table, 
       effectif : item.id_reservation_table
  }))
  
    return (
     <>
        <div className='container_statistique'>
          <div className='statistique'>
            <LineChart width={600} height={300} data={chartData} >
            <XAxis dataKey="name" />
            <YAxis dataKey="effectif"/>
            <CartesianGrid stroke="green" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="uv" stroke="blue" />
            <Line type="monotone" dataKey="pv" stroke="#FF8C00" />
            <Tooltip />
            <Legend />
            </LineChart>
          </div>
          <Statistique_chambre/>
          <Statistique_piscine/>
          <Statistique_salle/>
        </div>
     </>
    );
  };
  export default MyChart;  