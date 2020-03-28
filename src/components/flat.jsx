import React, { Component } from 'react';

const Flat = (props) => {
  return (
    <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.2)), url("${props.image}")` }}>
      <div className="card-category">{props.price}  {props.priceCurrency}</div>
      <div className="card-description">
        <h2>{props.name}</h2>
      </div>
      <a className="card-link" href="#"></a>
    </div>
  );
};


export default Flat;
