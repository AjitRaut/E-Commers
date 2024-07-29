import React from "react";
import useProductMenu from "../Utils/useProductMenu";
import { useParams } from "react-router-dom";

const OfferFooter = () => {
  const { infoId } = useParams();
  const pmenu = useProductMenu(infoId);

  const offerft = pmenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const lastCard = offerft?.[offerft.length - 1];
  const data = lastCard?.card.card;

  return (
    <div className="w-full">
      <div className="max-w-6xl m-auto bg-offerftbg ">
        <div className="p-4">
          <div className="flex gap-2 place-items-center">
            <img
              className="h-[30px] w-[60px]"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i"
              alt="FSSAI License"
            />
            <span>
              <p className="text-xs pt-2">License No. 11523078000402</p>
            </span>
          </div>
          <hr className="my-3 border border-solid border-gray-300" />
          <div>
            {lastCard && (
              <div>
                <p className="text-sm font-semibold">{data?.name}</p>
                <p className="text-xs">{data?.area}</p>
                {/* Add more details if needed */}
                <p>{data?.completeAddress}</p>
              </div>
            )}
          </div>
          <hr className="my-3 border border-solid border-gray-300" />
          <div className="w-full">
            <div className="flex justify-center place-items-center">
              <p className="font-bold text-sm my-6">For better experience, download the Swiggy app now</p>
            </div>
              <div className="flex justify-center place-items-center">
                <div className="h-12 max-w-[208px]">
                  <img
                    className="h-full w-full"
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
                    alt=""
                  />
                </div>
                <div className="h-12 max-w-[208px]">
                  <img
                    className="h-full w-full"
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
                    alt=""
                  />
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferFooter;
