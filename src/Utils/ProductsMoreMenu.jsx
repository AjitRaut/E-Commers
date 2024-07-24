import React, { useEffect } from "react";
import useProductMenueMore from "./useProductMenueMore";
import axios from "axios";

const ProductsMoreMenu = () => {
  useEffect(() => {
    axios
      .get(
        "https://www.swiggy.com/dapi/restaurants/list/update"
      )
      .then((res) => {
        console.log(res);
      });
  });
  return <div></div>;
};

export default ProductsMoreMenu;
