import React from "react";
import "./card.css";
import { IMG_URL } from "../Utils/Url";

const Card = (props) => {
  const { cloudinaryImageId, name } = props.datt.info;

  return (
    <>
      <div className=" max-w-full ">
        <div className="my-2">
          <img
            className=" w-full h-60 rounded-xl"
            src={IMG_URL+cloudinaryImageId
  }
          />
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
