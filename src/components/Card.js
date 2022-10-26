import React from 'react';

const Card = (props) => {
  //outil pour débug
  console.log(props.country);
  return (
    <li className="card">
      <div className="infos">
        <h2>Nom du pays</h2>
      </div>
    </li>    
  );
};

export default Card