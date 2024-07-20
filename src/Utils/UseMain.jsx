import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const UseMain = () => {
  const [newdata, setnewdata] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.145923&lng=79.08762999999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )
      .then((res) => {
        console.log(res?.data?.data?.cards[4]);
        setnewdata(
          res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setfiltersearch(
          res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      });
  }, []);

  return newdata;
};

export default UseMain;
