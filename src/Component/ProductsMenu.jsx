import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";

const ProductsMenu = () => {
  const [pmenu, setpmenu] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId=790839&catalog_qa=undefined&submitAction=ENTER"
      )
      .then((res) => {
        setpmenu(res?.data?.data?.cards[2]?.card?.card?.info);
      });
  }, []);

  console.log(pmenu);

  return (
    <>
      <h1 className=" mt-32">hii</h1>
      {pmenu.length === 0 ? (
        <ShimmerUi />
      ) : (
        <div className=" mt-20">
          <h3>{pmenu.name}</h3>
          <h3>{pmenu.city}</h3>
        </div>
      )}
    </>
  );
};

export default ProductsMenu;
