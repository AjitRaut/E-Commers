import React from "react";

const Footer = () => {
  return (
    <>
    <div className="w-full bg-orange-100">
    <div className="mt-40 max-w-6xl m-auto">
        <div className=" flex justify-evenly place-items-center">
          <div className="w-[400px]">
            <h1 className="text-2xl font-extrabold text-slate-700">
              For better experience,download the Swiggy app now
            </h1>
          </div>
          <div className="h-[64px] flex gap-3">
            <div className="w-52">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
                alt=""
              />
            </div>
            <div className="w-52">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Footer;
