import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = (props) => {

  const [data, setData] =useState([]);
  // ca se joue quand le composant est monté, on va juste aller lire les données
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then((res) => setData(res.data));
  }, []);

  return (
    <div className='countries'>
      <h1>Pays</h1>
      <ul>
        { data.map((country, index) => (
        <Card key={index} country={country}/>
        )) }
      </ul>
    </div>
  );
};

export default Countries;