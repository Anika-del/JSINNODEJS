// src/components/netflix-series/NetflixSeries.jsx
import React from 'react';
import Series from './Series';

function NetflixSeries() {
  const seriesList = [
    { title: 'Stranger Things', description: 'A group of kids uncovering supernatural events', rating: 8.8 },
    { title: 'The Crown', description: 'The life of Queen Elizabeth II', rating: 8.6 },
    { title: 'Money Heist', description: 'A criminal mastermind and his plan', rating: 8.3 },
  ];

  return (
    <div className="netflix-series">
      {seriesList.map((series, index) => (
        <Series
          key={index}
          title={series.title}
          description={series.description}
          rating={series.rating}
        />
      ))}
    </div>
  );
}

export default NetflixSeries;
