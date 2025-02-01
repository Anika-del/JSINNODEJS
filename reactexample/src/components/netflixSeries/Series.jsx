// src/components/netflixSeries/Series.jsx
import React from 'react';

function Series({ title, description, rating }) {
  return (
    <div className="series">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default Series;
