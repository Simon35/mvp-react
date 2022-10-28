import React from 'react';

const Card = ({country}) => {
  //outil pour débug
  console.log(country);
  return (
    <li className="card">
      <img src={country.flags.svg} alt={"drapeau de " +country.translations.fra.common} srcset="" />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <h4>{country.capital}</h4>
        <p>Pop. {country.population.toLocaleString()}</p>
      </div>
    </li>    
  );
};

export default Card