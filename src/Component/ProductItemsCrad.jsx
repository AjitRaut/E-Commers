import React from "react";
import { Recomended_IMG_URL } from "../Utils/Url";
import { useDispatch } from "react-redux";
import { additem } from "../Utils/cartSlice";

const ProductItemsCrad = ({ itemCards }) => {
  console.log(itemCards);

  if (!itemCards) {
    return null;
  }
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(additem(item));

  };

  return (
    <>
      <div>
        {itemCards?.map((item) => (
          <div className="w-full" key={item?.card?.info?.id}>
            <div className="flex justify-between p-3 mb-6">
              <div className="w-3/4">
                <div className="font-bold text-lg text-slate-700">
                  {item?.card?.info?.name}
                </div>

                <div className="font-bold text-base">
                  {item?.card?.info?.finalPrice ? (
                    <>
                      <span className="line-through text-slate-400">
                        &#8377;
                        {item?.card?.info?.defaultPrice / 100 ||
                          item?.card?.info?.price / 100}
                      </span>
                      &nbsp;
                      <span>
                        &#8377;{item?.card?.info?.finalPrice / 100}
                      </span>
                    </>
                  ) : (
                    <span>
                      &#8377;
                      {item?.card?.info?.defaultPrice / 100 ||
                        item?.card?.info?.price / 100}
                    </span>
                  )}
                </div>

                {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                  <div className="py-1 text-sm text-green-900 font-bold">
                    {item?.card?.info?.ratings?.aggregatedRating?.rating}
                    {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 && (
                      <span className="text-sm text-gray-600 font-bold">
                        (
                        {
                          item?.card?.info?.ratings?.aggregatedRating
                            ?.ratingCountV2
                        }
                        )
                      </span>
                    )}
                  </div>
                )}
                <div className="font-normal text-base text-slate-600">
                  {item?.card?.info?.description}
                </div>
              </div>
              <div className="relative ml-8 w-3/12">
                <img
                  className="h-36 w-full rounded-lg object-cover"
                  src={Recomended_IMG_URL + item?.card?.info?.imageId}
                  alt="ItemCard"
                />
                <div className="absolute bottom-[-11px] w-full flex justify-center">
                  <button
                    onClick={() => handleClick(item)}
                    className="bg-white h-8 w-24 border-2 shadow-md  rounded-lg px-5 text-center text-green-700 text-xl font-bold border-gray-400"
                  >
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
