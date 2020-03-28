import React, { Component } from 'react';

import Flat from './flat';

const FlatList = (props) => {
  const renderList = () => {
    console.log(props.flats);
    return props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
          selected={flat.name === props.selectedFlat.name}
          index={index}
          selectFlat={props.selectFlat}
        />
      );
    });
  };


  return (
    <div className="card">
      {renderList()}
    </div>
  );
};


export default FlatList;
