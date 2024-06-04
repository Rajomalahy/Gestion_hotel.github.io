import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './statistique.css';

const Statistique_salle = () => {

  const [reservation_salle, setReservation_salle] = useState([])
        useEffect(()=>{
            axios.get('http://localhost:8081/chart/Statistique_salle')
            .then(res => setReservation_salle(res.data))
            .catch(err => console.log(err))
        }, [])

  const chartData = reservation_salle.map(item =>({ 
       name: item.date_salle ,
       uv : item.date_salle,
       pv: item.id_reservation_salle, 
       effectif : item.id_reservation_salle
  }))
  
    return (
      <div className='statistique'>
          <LineChart width={600} height={300} data={chartData} >
          <XAxis dataKey="name" />
          <YAxis dataKey="effectif"/>
          <CartesianGrid stroke="green" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="blue" />
          <Line type="monotone" dataKey="pv" stroke="red" />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>
    );
  };
  export default Statistique_salle ;  