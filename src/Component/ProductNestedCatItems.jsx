import React from "react";
import { Recomended_IMG_URL } from "../Utils/Url";

const ProductNestedCatptis = ({ pti }) => {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between p-3 mb-6">
          <div className="w-3/4">
            <div className="font-bold text-lg text-slate-700">{pti.name}</div>
            <div className="font-bold text-base">
              <span>&#8377;</span>
              {pti.defaultPrice / 100 ||
                pti.finalPrice / 100 ||
                pti.price / 100}
            </div>
            <div className="font-extralight text-base text-slate-600">
              {pti.description}
            </div>
          </div>
          <div className="relative ml-8 w-3/12">
            <img
              className="h-36 w-full rounded-lg object-cover"
              src={Recomended_IMG_URL + pti.imageId}
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
    </>
  );
};

export default ProductNestedCatptis;
