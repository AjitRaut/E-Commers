import React from 'react';
import UseMain from '../Utils/UseMain';

const AllRestFilter = () => {
  const newdata = UseMain();

  // Ensure newdata and cards are defined before accessing them
  if (!newdata || !newdata.cards || !newdata.cards[3] || !newdata.cards[3].card.card.facetList) {
    return <div>Loading...</div>;
  }

  const allrest = newdata.cards[3].card.card.facetList;

  return (
    <div>
      allfilter
      {allrest.map((filtrest, index) => (
        <div key={index}>
          {filtrest?.label}
        </div>
      ))}
    </div>
  );
};

export default AllRestFilter;
