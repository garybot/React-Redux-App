import React from 'react';

const Beer = (props) => {
  const beer = props.beer;
  return (
    <article className="beer-card">
      <h2>{beer.name}</h2>
      <img src={beer.labels.medium} alt={`${beer.name} label`} />
      {
        beer.style ? <p>{beer.style.shortName}</p> : null
      }
      <p>{beer.abv}% ABV</p>
    </article>
  )
}

export default Beer;