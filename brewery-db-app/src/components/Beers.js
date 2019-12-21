import React from 'react';
import Beer from './Beer.js';

export default function Beers(props) {
  console.log(props.beers);
  return (
    <div className="beers-list">
      {
        props.beers.map(beer => {
          return <Beer key={beer.id} beer={beer} />
        })
      }
    </div>
  )
}