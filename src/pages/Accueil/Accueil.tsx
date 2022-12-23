import React from 'react';
import DisplayLogement from '../../components/LogementAccueil/DisplayLogement';
import "./Accueil.css"

const Accueil = () => {
  return (
    <div className='container'>
      <div className='header-pannel'>
        <div className='img-container'>
        <img src="./../../../public/headerBg.png" alt="paysage" className='img-header-pannel' />
        </div>
        <h2>Chez vous, partout et ailleurs</h2>
      </div>

      <DisplayLogement />
    </div>
  );
};

export default Accueil;