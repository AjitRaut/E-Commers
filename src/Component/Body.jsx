import React from 'react'
import ProductSlider from './ProductSlider'
import Main from './Main'
import TopRestorant from './TopRestorant'
import AllRestaurant from './AllRestaurant'
import BestPlaces from './BestPlaces'
import BestCousins from './BestCousins'
import ExploreRestaaurant from './ExploreRestaaurant'

const Body = () => {
  return (
    <>
    <div className='mt-24'>
    <ProductSlider />
     {/* <Main />  */}
     <TopRestorant />
      <AllRestaurant />
      <BestPlaces />
      <BestCousins />
      <ExploreRestaaurant />
     
    </div>
     
    </>
  )
}

export default Body