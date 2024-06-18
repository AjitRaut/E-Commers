import { info } from "autoprefixer";
import Card from "./Card";
import React from "react";
import data from "../Utils/CardData";

const Main = () => {
  
  return (
    <>
      <div className=" w-full">
      <div className=" w-3/4 m-auto grid grid-cols-4 gap-7 px-4 bg-slate-300 ">
        {data.map(datt => (
          <Card key={info.id} datt={datt} />
        ))}
      </div>
      </div>
    </>
  );
};

export default Main;