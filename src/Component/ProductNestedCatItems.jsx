import React from "react";

const ProductNestedCatItems = ({pti}) => {
    console.log(pti.name)
  return (
    <>
      <div>{pti.name}</div>
    </>
  );
};

export default ProductNestedCatItems;
