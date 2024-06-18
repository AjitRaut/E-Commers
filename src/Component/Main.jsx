import { info } from "autoprefixer";
import Card from "./Card";
import React from "react";
import data from "../Utils/CardData";

const Main = () => {
  return (
    <>
      <div className=" w-full ">
        <div className="my-24 ">
          <div className="max-w-7xl  m-auto grid grid-cols-4 gap-7 px-4">
            {data.map((datt) => (
              <Card key={info.id} datt={datt} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
