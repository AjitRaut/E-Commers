import React, { useState } from 'react';
import UseMain from '../Utils/UseMain';
import ShimmerUi from './ShimmerUi';

const BestPlaces = () => {
  const newdata = UseMain();
  const [showMore, setShowMore] = useState(false);

  if (!newdata || !newdata.cards) {
    // Show a loading state while data is being fetched
    return <ShimmerUi />;
  }

  const brands = newdata.cards[6]?.card?.card?.brands;
  console.log(brands);

  // Check if brands is an array before rendering
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
          <button key={index} className=' p-2 border text-center overflow-hidden  text-lg text-brand font-gilroy font-normal border-gray-300 rounded-xl'>
            <div className='text-center '>
              {brand.text}
            </div>
          </button>
        ))}
        {!showMore && (
          <button 
            className='p-2 border text-center  text-lg text-brand font-gilroy overflow-hidden font-normal border-gray-300 rounded-xl'
            onClick={() => setShowMore(true)}
          >
            Show More
          </button>
        )}
        {showMore && remainingBrands.map((brand, index) => (
          <button key={index + 11} className='m-2 text-lg text-brand font-gilroy font-bold overflow-hidden p-2 border text-center border-gray-300 rounded-2xl'>
            <div className='text-center'>
              {brand.text}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default BestPlaces;
