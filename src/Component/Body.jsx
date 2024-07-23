import React from 'react'
import ProductSlider from './ProductSlider'
import Main from './Main'
import TopRestorant from './TopRestorant'
// import ProductsMoreMenu from '../Utils/ProductsMoreMenu'

const Body = () => {
  return (
    <>
    <div className='mt-24'>
    <ProductSlider />
     {/* <Main />  */}
     <TopRestorant />
     {/* <ProductsMoreMenu /> */}
    </div>
     
    </>
  )
}

export default Body