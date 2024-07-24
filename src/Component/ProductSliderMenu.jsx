import React from 'react'
import useProductSliderApi from '../Utils/useProductSliderApi'

const ProductSliderMenu = () => {
    const product_Slider_Menu = useProductSliderApi();
    
    console.log(product_Slider_Menu)
  return (
    <>
      {
        product_Slider_Menu.map((pmi,index)=>{
          console.log()
          {pmi?.card?.card?.info?.name}
        })
      }
    </>
  )
}

export default ProductSliderMenu
