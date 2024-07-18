import React from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useProductMenu from "../Utils/useProductMenu";
import "./card.css";
import ProductCategories from "./ProductCategories";
import Offers from "./Offers";

const ProductsMenu = () => {
  const { infoId } = useParams();
  const pmenu = useProductMenu(infoId);

  const [show, setshow] = useState(false);

  const menuInfo = pmenu?.cards?.[2]?.card?.card?.info;

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
    feeDetails,
  } = menuInfo || {};

  const slaString = sla?.slaString;
  const message = feeDetails?.message;

  const cat =
    pmenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(cat);

  return (
    <>
      {pmenu.length === 0 ? (
        <ShimmerUi />
      ) : (
        <div className="mt-12 w-full">
          <div className=" max-w-3xl m-auto flex place-items-center">
            <div className="w-full ">
              <div className="p-3 mt-20">
                <h1 className="font-bold text-2xl">{name}</h1>
              </div>
              <div className="pmenu-content">
                <div className=" p-3 bg-white border-solid border-2  border-slate-200 rounded-xl">
                  <span className=" font-bold">{avgRating}</span>
                  <span className=" font-bold">({totalRatingsString})</span>
                  <span className=" m-2 font-serif text-center text-xl text-slate-400 leading-4">
                    .
                  </span>
                  <span className=" font-bold">{costForTwoMessage}</span>
                  <div className=" text-orange-600 font-medium text-sm">
                    {cuisines.join(" ,")}
                  </div>
                  <div className="flex place-items-center">
                    <div></div>
                    <span className=" font-bold"> Outlet</span>
                    <span className=" ml-3 text-sm text-center text-slate-400">
                      {areaName}
                    </span>
                  </div>
                  <div className=" lowercase text-sm font-semibold ">
                    {slaString}
                  </div>
                  <hr className="mt-4" />
                  <div
                    className="text-sm text-slate-500 leading-9"
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                </div>
              </div>

              {/* Deals & Offers Section */}
              <Offers />
              {/* Deals & Offers Section */}

              {cat.map((c, index) => (
                <ProductCategories
                  key={c.card.card.title}
                  categories={c.card.card}
                  show={index === show}
                  setshow={() => setshow(index === show ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsMenu;
