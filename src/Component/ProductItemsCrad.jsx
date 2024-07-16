import React from "react";
import { Recomended_IMG_URL } from "../Utils/Url";

const ProductItemsCrad = ({ itemCards ,nestedCategories}) => {
  console.log(itemCards);
  console.log(nestedCategories)

  if (!itemCards) {
    return null;
  }

  return (
    <>
      <div>
        {itemCards.map((item) => (
          <div className="flex justify-between p-3" key={item.card.info.id}>
            <div>
              <div className="font-bold text-lg text-slate-700">
                {item.card.info.name}
              </div>
              <div className="font-bold text-base">
                <span>&#8377;</span>
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.finalPrice / 100 ||
                  item.card.info.price / 100}
              </div>
              <div className="font-extralight text-base text-slate-600">
                {item.card.info.description}
              </div>
            </div>
            <div className="ml-5 w-3/12">
              <img
                className="h-36 w-36 rounded-lg object-cover"
                src={Recomended_IMG_URL + item.card.info.imageId}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductItemsCrad;
