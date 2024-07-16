import React from 'react'

const ProductNestedCategories = ({nestedCategories}) => {
    console.log(nestedCategories)
    if (!nestedCategories) {
        return null;
      }
    
  return (
    <>
     <h2>Nested Categories</h2>
      <div>
        {nestedCategories.map((category, index) => (
          <div key={index}>
            {category?.title}
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductNestedCategories
