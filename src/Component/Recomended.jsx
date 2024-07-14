import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useProductMenu from "../Utils/useProductMenu";
import { Recomended_IMG_URL } from "../Utils/Url";

const Recomended = () => {
  const { infoId } = useParams();
  const pmenu = useProductMenu(infoId);

  const recommended =
    pmenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  console.log(recommended);

  return (
    <>
      <div>
        <div className="px-3">
            <h1 className="font-extrabold text-base">Recomended({recommended.length})</h1>
        </div>
        <div>
          {recommended.map((recom, index) => (
            <div className=" flex justify-between p-3">
              <div key={index}>
                <div> {recom.card.info.name}</div>
                <div>{recom.card.info.defaultPrice / 100}</div>
                <span>{recom.card.info.ratings.aggregatedRating.rating}</span>
                {/* <span>({recom.card.info.ratings.aggregatedRating.ratingCountV2
              })</span> */}
                <div>{recom.card.info.description}</div>
              </div>
              <div>
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
    </>
  );
};

export default Recomended;
