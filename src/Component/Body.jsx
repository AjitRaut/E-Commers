import React from 'react'
import ProductSlider from './ProductSlider'
import Main from './Main'
import TopRestorant from './TopRestorant'
import AllRestaurant from './AllRestaurant'

const Body = () => {
  return (
    <>
    <div className='mt-24'>
    <ProductSlider />
     {/* <Main />  */}
     <TopRestorant />
      <AllRestaurant />
     
    </div>
     
    </>
  )
}

export default Body