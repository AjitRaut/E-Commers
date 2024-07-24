import axios from "axios";
import React, { useEffect, useState } from "react";

const useProductSliderApi = () => {
  const [data, setdata] = useState([]);

  const slider_api_url = () => {
    axios
      .get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      )
      .then((res) => {
        setdata(res?.data?.data.cards);
      });
  };

  useEffect(() => {
    slider_api_url();
  }, []);
  return data;
};

export default useProductSliderApi;
