import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Acceuil from './Acceuil/acceuil';
import Categorie from './categorie/Categorie';
import Table from './table/table';
import Plat from './Plat/plat';
import MyChart from './statistique/statistique';
import NoPage from './NoPage/noPage';
import ModifierCat from '../pages/categorie/ModifierCat';
import ModifierTable from './table/modifierTable';
import ModifierPlat from './Plat/modifierPlat';

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='acceuil' element={<Acceuil/>}/>
          <Route path='categorie' element={<Categorie/>} />
          <Route path='table' element={<Table/>} />
          <Route path='plat' element={<Plat/>} />
          <Route path='statistique' element={<MyChart/>} />
          <Route path='categorie/ModifierCat/:id_categorie' element={<ModifierCat/>} />
          <Route path='table/ModifierTable/:id_table' element={<ModifierTable/>} />
          <Route path='plat/ModifierPlat/:id_plat' element={<ModifierPlat/>} />
          <Route path='*' element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
