import React from 'react'
import ProductSlider from './ProductSlider'
import Main from './Main'
import TopRestorant from './TopRestorant'
import ProductSliderMenu from './ProductSliderMenu'

const Body = () => {
  return (
    <>
    <div className='mt-24'>
    <ProductSlider />
     {/* <Main />  */}
     <TopRestorant />
     <ProductSliderMenu />
     
    </div>
     
    </>
  )
}

export default Body