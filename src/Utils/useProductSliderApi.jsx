import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductSliderMenu_url } from "./Url";

const useProductSliderApi = (restid) => {
  const [data, setdata] = useState([]);

  const slider_api_url = () => {
    axios.get(ProductSliderMenu_url + restid).then((res) => {
      setdata(res?.data?.data.cards);
    });
  };

  useEffect(() => {
    slider_api_url();
  }, []);
  return data;
};

export default useProductSliderApi;
