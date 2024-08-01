import React, { useState } from 'react';
import UseMain from '../Utils/UseMain';
import ShimmerUi from './ShimmerUi';

const BestPlaces = () => {
  const newdata = UseMain();
  const [showMore, setShowMore] = useState(false);

  if (!newdata || !newdata.cards) {
    return <ShimmerUi />;
  }

  const brands = newdata.cards[6]?.card?.card?.brands;

  if (!Array.isArray(brands)) {
    return <ShimmerUi />;
  }

  const initialBrands = brands.slice(0, 11);
  const remainingBrands = brands.slice(11);

  return (
    <div className='mt-5 max-w-6xl overflow-hidden m-auto'>
        <h1 className='text-lg font-bold'>Best Places to Eat Across Cities</h1>
      <div className='my-2 grid grid-cols-4 gap-4'>
        {initialBrands.map((brand, index) => (
          <button key={index} className='p-2 border text-center text-[15px] text-brand font-medium border-gray-300 rounded-xl'>
            <div className='text-center truncate w-[250px]'>
              {brand.text}
            </div>
          </button>
        ))}
        {!showMore && (
          <button 
            className='p-2 border text-center text-[15px] text-brand font-medium border-gray-300 rounded-xl'
            onClick={() => setShowMore(true)}
          >
            Show More
          </button>
        )}
        {showMore && remainingBrands.map((brand, index) => (
          <button key={index + 11} className='m-2text-[15px] text-brand font-medium p-2 border text-center border-gray-300 rounded-2xl'>
            <div className='text-center truncate w-[250px]'>
              {brand.text}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default BestPlaces;
