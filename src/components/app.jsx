import React, { Component } from 'react';
import FlatList, from './flat_list';



class App extends Component {


  render() {
    return (
      <div>
        <div className="left-scene">
          <FlatList />
        </div>

        <div className="right-scene">

        </div>
      </div>
    );
  }
}


export default App;
