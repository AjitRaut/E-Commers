import React from "react";
import { Recomended_IMG_URL } from "../Utils/Url";
import { useDispatch, useSelector } from "react-redux";
import { nested_additem } from "../Utils/cartSlice";

const ProductNestedCatptis = ({ pti }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.nested_items);

  const handleClick = (pti) => {
        dispatch( nested_additem(pti));
  }

  const price = pti?.defaultPrice
    ? pti.defaultPrice / 100
    : pti?.finalPrice
    ? pti.finalPrice / 100
    : pti?.price
    ? pti.price / 100
    : "Price not available";

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between p-3 mb-6">
          <div className="w-3/4">
            <div className="font-bold text-lg text-slate-700">
              {pti?.name || "No name available"}
            </div>
            <div className="font-bold text-base">
              <span>&#8377;</span>
              {price}
            </div>
            {pti?.ratings?.aggregatedRating?.rating && (
              <div className="py-1 text-sm text-green-900 font-bold">
                {pti.ratings.aggregatedRating.rating}
                {pti.ratings.aggregatedRating.ratingCountV2 && (
                  <span className="text-sm text-gray-600 font-bold">
                    ({pti.ratings.aggregatedRating.ratingCountV2})
                  </span>
                )}
              </div>
            )}
            <div className="font-normal text-base text-slate-600">
              {pti?.description || "No description available"}
            </div>
          </div>
          <div className="relative ml-8 w-3/12">
            <img
              className="h-36 w-full rounded-lg object-cover"
              src={pti?.imageId ? `${Recomended_IMG_URL}${pti.imageId}` : ""}
              alt="Nested Category Images"
            />
            <div className="absolute bottom-[-8px] w-full flex justify-center">
              <button
                onClick={() => handleClick(pti)}
                className="bg-white h-8 w-24 border-2 shadow-md rounded-lg px-5 text-center text-green-700 text-xl font-bold border-gray-400"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
        <hr className="mb-3 border-t-2 border-gray-300" />
      </div>
    </>
  );
};

export default ProductNestedCatptis;
