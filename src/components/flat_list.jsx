import React, { Component } from 'react';

import Flat from './flat';

class FlatList extends Component {
  renderList = () => {
    return this.props.flats.map(flat => <Flat name={flat.name} />);
  }

  render() {
    return (
      <div className="falt-list">
        {this.renderList()}
      </div>
    );
  }
}


export default FlatList;
