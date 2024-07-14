import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useProductMenu from "../Utils/useProductMenu";

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
        <div>
          {recommended.map((recom, index) => (
            <div key={index}>
              <div> {recom.card.info.name}</div>
              <div>{recom.card.info.defaultPrice/100}</div>
              <span>{recom.card.info.ratings.aggregatedRating.rating}</span>
              {/* <span>({recom.card.info.ratings.aggregatedRating.ratingCountV2
              })</span> */}
              <div>{recom.card.info.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recomended;
