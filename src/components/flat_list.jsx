import React, { Component } from 'react';

import Flat from './flat';

class FlatList extends Component {
  renderList = () => {
    console.log(this.props.flats);
    return this.props.flats.map(flat => <Flat name={flat.name} image={flat.imageUrl} price={flat.price} priceCurrency={flat.priceCurrency}/>);
  }

  render() {
    return (
      <div className="card">
        {this.renderList()}
      </div>
    );
  }
}


export default FlatList;
