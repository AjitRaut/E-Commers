import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderIMG_URL } from "../Utils/Url";

const Slider = () => {
  const [newdata, setnewdata] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.145923&lng=79.08762999999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )
      .then((res) => {
        console.log(res);
        setnewdata(
          res?.data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
            ?.info
        );
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className=" my-28">
        <div>
        <Slider {...settings}>
          {newdata.map((datt, index) => {
            return <img className=" w-36 h-44" key={datt.imageId} src={`${SliderIMG_URL}${datt.imageId}`}></img>;
          })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Slider;
