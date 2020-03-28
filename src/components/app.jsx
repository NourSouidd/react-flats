import React, { Component } from 'react';
import FlatList from './flat_list';

import flats from '../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: flats,
    };
  }


  render() {
    return (
      <div>
        <div className="left-scene">
          <FlatList flats={this.state.flats} />
        </div>

        <div className="right-scene">

        </div>
      </div>
    );
  }
}


export default App;
