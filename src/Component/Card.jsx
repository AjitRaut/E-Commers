import React from "react";
import "./card.css";
import { IMG_URL } from "../Utils/Url";

const Card = (props) => {
  const { cloudinaryImageId, name, avgRating, cuisines } = props.datt.info;

  return (
    <>
      <div className=" max-w-full ">
        <div className="my-2">
          <img
            className=" w-full h-60 rounded-xl"
            src={IMG_URL + cloudinaryImageId}
          />
        </div>
        <div className="w-full bg-orange-900 h-30 overflow-hidden">
          <div>
            <p>{name}</p>
          </div>
          <div>
            <p>{avgRating}</p>
          </div>
          <div>
          <p>{cuisines.join(", ")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
