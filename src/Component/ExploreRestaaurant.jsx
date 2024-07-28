import React from 'react'
import { useState } from 'react';
import UseMain from '../Utils/UseMain';
import ShimmerUi from './ShimmerUi';

const ExploreRestaaurant = () => {
    const newdata = UseMain();

     
    if (!newdata || !newdata.cards) {
        return <ShimmerUi />;
      }
    
      const brands = newdata.cards[8]?.card?.card?.brands;
  return (
    <>
         <div className='mt-5 max-w-6xl overflow-hidden m-auto'>
        <h1 className='text-lg font-bold'>Best Cuisines Near Me</h1>
      <div className='my-2 grid grid-cols-2 gap-4'>
        {brands.map((brand, index) => (
          <button key={index} className=' p-2 border text-center border-gray-300 rounded-xl'>
            <div className='text-center'>
              {brand.text}
            </div>
          </button>
        ))}
        
      </div>
    </div>
    </>
  )
}

export default ExploreRestaaurant
