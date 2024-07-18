import React from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useProductMenu from "../Utils/useProductMenu";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./card.css";
import Recomended from "./Recomended";
import ProductCategories from "./ProductCategories";

const ProductsMenu = () => {
  const { infoId } = useParams();
  const pmenu = useProductMenu(infoId);

  const [Slideritem, SetSlideritem] = useState(0);

  const Next = () => {
    if (offers.length - 1 === Slideritem) return false;
    SetSlideritem(Slideritem + 3);
  };
  const Prev = () => {
    if (offers === 0) return false;
    SetSlideritem(Slideritem - 1);
  };

  const menuInfo = pmenu?.cards?.[2]?.card?.card?.info;
  const offers =
    pmenu?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers || [];

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

              <div className="p-4">
                <div className="flex justify-between place-items-center">
                  <h1 className="font-bold text-xl"> Deals For You</h1>
                  <div>
                    <button onClick={Prev}>
                      <GoArrowLeft className=" h-8 w-8 bg-slate-200 rounded-full p-2 inline mr-2" />
                    </button>
                    <button onClick={Next}>
                      <GoArrowRight className=" h-8 w-8 bg-slate-200 rounded-full p-2 inline" />
                    </button>
                  </div>
                </div>
                <div>
                  {/* Offers Section */}
                  <div className="flex mt-3 overflow-hidden">
                    <div className=" flex gap-4 ">
                      {offers.map((offer, index) => (
                        <div
                          className=" p-2 border-solid border-2 flex border-slate-200 rounded-xl cursor-pointer"
                          key={index}
                          // style={{ transform: `translateX(-${Slideritem * 100}%)` }}
                        >
                          <div className="w-72 flex flex-col">
                            <div className="text-lg font-bold">
                              {offer.info.header}
                            </div>

                            {/* <div>{offer.info.expiryTime}</div> */}
                            <div className="text-sm font-bold text-slate-500">
                              {offer.info.couponCode}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Offers Section end */}
                </div>
              </div>
              {/* <Recomended /> */}
              {cat.map((c, index) => (
                <ProductCategories key={index} categories={c.card.card}
                show={index === 0 && true} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsMenu;
