// import { Container, Row, Col, Card } from 'react-bootstrap';
import React from 'react';
import ChartVisiteur from '../../../chart/visiteur';
import VisiteurAnnee from '../../../chart/visiteurAnnee';
import ListeCommande from '../../liste/Commande';
import './Acceuil.css';

function Acceuil() {
  return (
    <>
      <div className='container_acceuil'>
        <div className='row_acceuil'>
          <div className='liste_acceuil'>
            <ListeCommande/>
          </div>
          <div className='statistique_acceuil'>
            <div className='titre_commande'>
              <h3>Statistique de visiteur chaque mois et chaque année</h3>
            </div>
            <div className='liste_state'>
              <div className='state_acceuil'>
                <ChartVisiteur/>
              </div>
              <div className='state_acceuil'>
                <VisiteurAnnee/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>    
  )
}

export default Acceuil;