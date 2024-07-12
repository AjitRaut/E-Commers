import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useProductMenu from "../Utils/useProductMenu";

const ProductsMenu = () => {
  const { infoId } = useParams();

  const pmenu = useProductMenu(infoId);

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
    feeDetails,
  } = pmenu;

  console.log(pmenu);

  const slaString = sla?.slaString;
  const message = feeDetails?.message;

  return (
    <>
      {pmenu.length === 0 ? (
        <ShimmerUi />
      ) : (
        <div className="mt-12 w-full">
          <div className=" max-w-3xl m-auto flex place-items-center">
            <div className=" ml-14  w-full ">
              <div className="p-3 mt-32">
                <h1 className=" font-bold text-2xl">{name}</h1>
              </div>
              <div className=" p-3 bg-white border-solid border-2  border-slate-200 rounded-xl">
                <span>{avgRating}</span>
                <span>({totalRatingsString})</span>
                <span className=" m-2 font-serif text-center text-xl text-slate-400 leading-4">
                  .
                </span>
                <span>{costForTwoMessage}</span>
                <div className=" text-orange-600 font-medium text-sm">
                  {cuisines.join(" ,")}
                </div>
                <div>
                  <span>Outlet</span>
                  <span className=" ml-3 text-sm text-slate-400">
                    {areaName}
                  </span>
                </div>
                <div className=" lowercase text-sm font-semibold ">
                  {slaString}
                </div>
                <hr className="mt-4" />
                
                  <div className="text-sm text-slate-500"  dangerouslySetInnerHTML={{ __html: message }} />
                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsMenu;
