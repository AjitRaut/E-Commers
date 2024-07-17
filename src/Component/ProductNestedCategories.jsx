import React, { useState } from "react";
import ProductNestedCatItems from "./ProductNestedCatItems";

const ProductNestedCategories = ({ nestedCategories }) => {
const [show , setshow] = useState(false)

const handleclick =()=>{
  setshow(!show)
}

  console.log(nestedCategories);
  if (!nestedCategories) {
    return null;
  }

  return (
    <>
      <div>
        {nestedCategories.map((category, index) => (
          <div className="cursor-pointer" key={index} onClick={handleclick}>
            {category?.title}({category?.itemCards?.length})
            {show && category?.itemCards?.map((itemcard, index) => (
              <ProductNestedCatItems key={index} pti={itemcard?.card?.info} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductNestedCategories;
