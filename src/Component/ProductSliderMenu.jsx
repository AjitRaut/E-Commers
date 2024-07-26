import React from "react";
import useProductSliderApi from "../Utils/useProductSliderApi";
import { useParams } from "react-router-dom";

const ProductSliderMenu = ({ restid }) => {
  const product_Slider_Menu = useProductSliderApi(restid);

  return (
    <div className="mt-44">
      {product_Slider_Menu?.map((pmi, index) => (
        <div key={index}>
          {pmi?.card?.card?.info?.name} {/* Displaying product info */}
        </div>
      ))}
    </div>
  );
};

export default ProductSliderMenu;
