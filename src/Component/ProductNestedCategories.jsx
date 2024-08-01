import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProductNestedCatItems from "./ProductNestedCatItems";

const ProductNestedCategories = ({ nestedCategories }) => {
  const [show, setShow] = useState(null);

  const handleclick = (index) => {
    setShow((prevIndex) => (prevIndex === index ? null : index));
  };

  if (!nestedCategories) {
    return null;
  }

  return (
    <>
      <div>
        {nestedCategories.map((category, index) => (
          <div key={index}>
            <div
              className="cursor-pointer flex justify-between place-items-center"
              onClick={() => handleclick(index)}
            >
              <div className="text-base font-semibold p-[10px]">
                {category?.title}
                {category.itemCards && ` (${category.itemCards.length})`}
              </div>
              <div
                className={`transition-transform duration-300 ${
                  show === index ? "rotate-180" : ""
                }`}
              >
                {category.itemCards && category.itemCards.length > 0 && (
                  <MdKeyboardArrowDown className="h-6 w-6" />
                )}
              </div>
            </div>

            {show === index &&
              category?.itemCards?.map((itemcard, itemIndex) => (
                <ProductNestedCatItems
                  key={itemIndex}
                  pti={itemcard?.card?.info}
                />
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductNestedCategories;
