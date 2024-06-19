import { info } from "autoprefixer";
import Card from "./Card";
import React from "react";
import data from "../Utils/CardData";
import { useState } from "react";

const Main = () => {
  const [newdata, setnewdata] = useState(data);
  return (
    <>
      <div className=" w-full ">
        <div className="my-24 ">
          <div className="max-w-6xl m-auto">
            <button className=" mx-8 bg-slate-100  px-4 py-1 cursor-pointer rounded-2xl font-medium text-center text-xl text-black"
              onClick={() => {
                let filterdata = newdata.filter(
                  (res) => res.info.avgRating < 4
                );
                console.log(filterdata);
                setnewdata(filterdata);
              }}
            >
              Top Rated
            </button>
          </div>
          <div className="max-w-6xl  m-auto grid grid-cols-4 gap-7 px-4">
            {newdata.map((datt) => (
              <Card key={info.id} datt={datt} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
