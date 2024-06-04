import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

function Layout() {
  return (
    <>
      <div className='container_layout'>
        <nav className='lien'>
            <ul>
              <li>
                <Link className='link' to="/Acceuil">Acceuil</Link>
                <Link className='link' to="/categorie">Categorie</Link>
                <Link className='link' to="/statistique">statistique</Link>
                <Link className='link' to="/table">Table</Link>
                <Link className='link' to="/Plat">Plat</Link>
              </li>
            </ul>
          </nav>
      </div>
      <Outlet/>
    </>
  );
}

export default Layout;
