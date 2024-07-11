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
    axios.get(ProductsMenu_URL + infoId).then((res) => {
      setpmenu(res?.data?.data?.cards[2]?.card?.card?.info || null);
    });
  }, []);

  console.log(pmenu);

  const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines } =
    pmenu;
  return (
    <>
      {pmenu.length === 0 ? (
        <ShimmerUi />
      ) : (
        <div className="mt-20 w-full">
          <div className=" max-w-6xl  m-auto">
            <div className=" mx-32  font-bold">
              <div className=" mt-40">
                <h1 className=" font-bold text-2xl">{name}</h1>
              </div>
              <div className=" mt-7 p-5 box shadow-lg bg-gray-500">
                <span>{avgRating}</span>
                <span>({totalRatingsString})</span>
                <span className=" m-2 font-serif text-center text-xl text-slate-400 leading-4">
                  .
                </span>
                <span>{costForTwoMessage}</span>
                <div>{cuisines.join(" ,")}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsMenu;
