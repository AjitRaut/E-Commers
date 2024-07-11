import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { ProductsMenu_URL } from "../Utils/Url";
const ProductsMenu = () => {
  const [pmenu, setpmenu] = useState([]);

  const { infoId } = useParams();

  useEffect(() => {
    axios.get(ProductsMenu_URL + infoId).then((res) =>{
      setpmenu(res?.data?.data?.cards[2]?.card?.card?.info);
    });
  }, []);

  console.log(pmenu)
  return (
    <>
      {pmenu.length === 0 ? (
        <ShimmerUi />
      ) : (
        <div className="mt-20 w-full">
           <div className=" max-w-6xl  m-auto">
            <div className=" mx-32">
              <div className=" mt-40">
            <h1 className=" font-bold text-2xl">{pmenu.name}</h1>
              </div>
             <div>
              <p>{pmenu.avgRating
}</p>
             </div>
            </div>
          
           </div>
            </div>
      )}
    </>
  );
};

export default ProductsMenu;
