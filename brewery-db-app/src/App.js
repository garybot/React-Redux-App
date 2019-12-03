import React from 'react';
import {connect} from 'react-redux';
import Beers from './components/Beers.js';
import { getBeers } from './actions';

import './App.css';

function App(props) {


  if (!props.beersList.length) {
    return <button className='button-load' onClick={props.getBeers}>Load Beers</button>
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Beers List</h1>
        <Beers beers={props.beersList} />
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    beersList: state.beersList
  }
}

export default connect(mapStateToProps, {getBeers})(App);
