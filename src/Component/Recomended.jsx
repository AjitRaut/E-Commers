import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useProductMenu from "../Utils/useProductMenu";
import { Recomended_IMG_URL } from "../Utils/Url";
import ShimmerUi from "./ShimmerUi";

const Recomended = () => {
  const { infoId } = useParams();
  const pmenu = useProductMenu(infoId);

  const recommended =
    pmenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
      console.log( pmenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
        ?.itemCards)

  return (
    <>
      {pmenu.length === 0 ? (
        <ShimmerUi />
      ) : (
        <div>
          <div className="px-3">
            <h1 className="font-extrabold text-base">
              Recomended({recommended?.length || 0})
            </h1>
          </div>
          <div>
            {recommended?.map((recom, index) => (
              <div className="flex justify-between p-3" key={index}>
                <div>
                  <div className="font-bold text-lg text-slate-700">
                    {recom.card.info.name}
                  </div>
                  <div className="font-bold text-base">
                    <span>&#8377;</span>
                    {recom.card.info.defaultPrice / 100 ||
                      recom.card.info.finalPrice / 100 ||
                      recom.card.info.price / 100}
                  </div>
                  <div className="font-extralight text-base text-slate-600">
                    {recom.card.info.description}
                  </div>
                </div>
                <div className="ml-5">
                  <img
                    className="h-36 w-36 rounded-lg object-cover"
                    src={Recomended_IMG_URL + recom.card.info.imageId}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Recomended;
