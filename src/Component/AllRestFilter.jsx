import React from "react";
import { FiFilter } from 'react-icons/fi';
import { MdKeyboardArrowDown } from "react-icons/md";

const AllRestFilter = () => {
  const Filtrest = [
    "Filter",
    "Sort By",
    "Fast Delivery",
    "New On Swiggy",
    "Ratings 4.0+",
    "Pure Veg",
    "Offers",
    "Rs. 300-Rs. 600",
    "Less than Rs. 300",
  ];

  return (
    <div className="flex gap-2 bg-white mt-3">
      {Filtrest.map((rest, index) => (
        <div key={index} className="flex items-center">
          <button className="text-sm border border-sky-200 p-2 rounded-2xl shadow-sm font-medium flex items-center">
            {rest}
             {rest === "Filter" && <FiFilter className="h-4 w-4 m-1" />}
            {rest === "Sort By" && (
              <MdKeyboardArrowDown className="m-1 h-6 w-6" />
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllRestFilter;
