import { info } from "autoprefixer";
import Card from "./Card";
import React from "react";
import data from "../Utils/CardData";

const Main = () => {
  
  return (
    <>
      <div className=" w-full bg-slate-50">
      <div className="max-w-7xl my-24 m-auto grid grid-cols-4 gap-7 px-4 bg-slate-50 ">
        {data.map(datt => (
          <Card key={info.id} datt={datt} />
        ))}
      </div>
      </div>
    </>
  );
};

export default Main;