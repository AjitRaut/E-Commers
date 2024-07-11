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
        <div className="mt-12 w-full">
          <div className=" max-w-3xl m-auto flex place-items-center">
            <div className=" ml-14 font-bold w-full ">
              <div className="p-3 mt-32">
                <h1 className=" font-bold text-2xl">{name}</h1>
              </div>
              <div className=" p-3 bg-white border-solid border-2 border-slate-200 rounded-xl">
                <span>{avgRating}</span>
                <span>({totalRatingsString})</span>
                <span className=" m-2 font-serif text-center text-xl text-slate-400 leading-4">
                  .
                </span>
                <span>{costForTwoMessage}</span>
                <div className=" text-orange-600 font-medium text-sm">{cuisines.join(" ,")}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsMenu;
