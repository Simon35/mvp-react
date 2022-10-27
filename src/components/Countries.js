import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = (props) => {

  const [data, setData] =useState([]);
  const [rangeValue, setRangeValue] = useState(40);
  // ca se joue quand le composant est monté, on va juste aller lire les données
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then((res) => setData(res.data));
  }, []);

  return (
    <div className='countries'>
      <ul className="radio-container">
        <input 
          type="range" 
          min="1" 
          max="250" 
          defaultValue={rangeValue} 
          onChange={(e) => setRangeValue(e.target.value)} />
      </ul>
      <h1>Pays</h1>
      <ul>
        { 
        data
          .slice(10, rangeValue) //limiter à 5 elements
          .map((country, index) => (
        <Card key={index} country={country}/>
        )) }
      </ul>
    </div>
  );
};

export default Countries;