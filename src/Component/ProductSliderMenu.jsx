import React from "react";
import useProductSliderApi from "../Utils/useProductSliderApi";
import { useParams } from "react-router-dom";

const ProductSliderMenu = () => {
  const { restid } = useParams();
  const product_Slider_Menu = useProductSliderApi(restid);
  console.log(product_Slider_Menu);

  return (
    <div className="mt-44">
      {product_Slider_Menu?.map((pmi, index) => (
        <div key={index}>{pmi?.card?.card?.info?.name}</div>
      ))}
    </div>
  );
};

export default ProductSliderMenu;
