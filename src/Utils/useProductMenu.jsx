import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ProductsMenu_URL } from "../Utils/Url";

const useProductMenu = (infoId) => {
  const [pmenu, setpmenu] = useState([]);

  useEffect(() => {
    axios.get(ProductsMenu_URL + infoId).then((res) => {
      setpmenu(res?.data?.data || null);
    });
  }, []);
  
  return pmenu;
};

export default useProductMenu;
