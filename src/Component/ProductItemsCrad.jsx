import React from "react";
import { Recomended_IMG_URL } from "../Utils/Url";

const ProductItemsCrad = ({ itemCards, nestedCategories }) => {
  console.log(itemCards);
  // console.log(nestedCategories);

  if (!itemCards) {
    return null;
  }

  return (
    <>
      <div>
        {itemCards.map((item) => (
          <div className="w-full">
            <div
              className="flex justify-between p-3 mb-6"
              key={item.card.info.id}
            >
              <div className="w-3/4">
                <div className="font-bold text-lg text-slate-700">
                  {item.card.info.name}
                </div>
                
                <div className="font-bold text-base">
                  <span>&#8377;</span>
                  {item.card.info.defaultPrice / 100 ||
                    item.card.info.finalPrice / 100 ||
                    item.card.info.price / 100}
                </div>
                {item.card.info.ratings?.aggregatedRating?.rating && (
                  <div className="py-2">
                    {item.card.info.ratings.aggregatedRating.rating}
                    {item.card.info.ratings.aggregatedRating.ratingCountV2 && (
                      <span>
                        ({item.card.info.ratings.aggregatedRating.ratingCountV2}
                        )
                      </span>
                    )}
                  </div>
                )}
                <div className="font-extralight text-base text-slate-600">
                  {item.card.info.description}
                </div>
              </div>
              <div className="relative ml-8 w-3/12">
                <img
                  className="h-36 w-full rounded-lg object-cover"
                  src={Recomended_IMG_URL + item.card.info.imageId}
                  alt=""
                />
                <div className="absolute bottom-[-8px] w-full flex justify-center">
                  <button className="bg-white h-8 w-24 border-2 shadow-md  rounded-lg px-5 text-center text-green-700 text-xl font-bold border-gray-400">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <hr className="mb-3 border-t-2 border-gray-300" />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductItemsCrad;
