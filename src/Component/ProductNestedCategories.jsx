import React from 'react'
import ProductNestedCatItems from './ProductNestedCatItems';

const ProductNestedCategories = ({nestedCategories}) => {
    console.log(nestedCategories)
    if (!nestedCategories) {
        return null;
      }
    
  return (
    <>
      <div>
        {nestedCategories.map((category, index) => (
          <div key={index}>
            {category?.title}({category?.itemCards?.length})
            {category?.itemCards?.map((itemcard,index)=>(
            <ProductNestedCatItems key={index} pti={itemcard?.card?.info} />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductNestedCategories
