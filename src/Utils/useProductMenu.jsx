import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ProductsMenu_URL } from "../Utils/Url";

const useProductMenu = (infoId) => {
  const [pmenu, setpmenu] = useState([]);

  useEffect(()=>{
    axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId=790839&catalog_qa=undefined&submitAction=ENTER")
    .then((res)=>{
      console.log(res)
    })
  } ,[])

  useEffect(() => {
    axios.get(ProductsMenu_URL + infoId).then((res) => {
      setpmenu(res?.data?.data?.cards[2]?.card?.card?.info || null);
    });
  }, []);

   console.log(pmenu)
  return pmenu;
};

export default useProductMenu;
