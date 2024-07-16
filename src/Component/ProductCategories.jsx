import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useProductMenu from "../Utils/useProductMenu";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProductItemsCrad from "./ProductItemsCrad";
import ProductNestedCategories from "./ProductNestedCategories";

const ProductCategories = ({categories}) => {
    console.log(categories)
  const { infoId } = useParams();
  const pmenu = useProductMenu(infoId);

  const [show , setshow] = useState(false)
  //   console.log(pmenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

//   const cat =
//     pmenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//       (c) =>
//         c.card?.card?.["@type"] ===
//           "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
//         c.card?.card?.["@type"] ===
//           "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//     );
//   console.log(cat);
const handleshow =()=>{
    setshow(!show)
}

  return (
    <>
      <div>
       
          <div key={categories.title}>
            <div className="flex justify-between place-items-center border-t-[12px] bg-white cursor-pointer" onClick={handleshow}>
              <div className="text-base font-bold">
              {categories.title}
              {categories.itemCards && ` (${categories.itemCards.length})`}
              </div>
              <div>
                <MdKeyboardArrowDown className="h-6 w-6" />
              </div>
            </div>
       {show && 
            <ProductItemsCrad itemCards={categories.itemCards} nestedCategories={categories.categories}  />
        }
        {show && 
            <ProductNestedCategories nestedCategories={categories.categories} />
        }
          </div>
      
      </div>
    </>
  );
};

export default ProductCategories;
