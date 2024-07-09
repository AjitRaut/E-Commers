import axios from 'axios'
import React from 'react'
import { useState , useEffect } from 'react'

const ProductsMenu = () => {

     const [ProductMenu , SetProductMenu] = useState()

     const ProductMenudata=()=>{
        axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=28405&catalog_qa=undefined&submitAction=ENTER")
       .then((res)=>{
        // console.log(res)
       }
    
    )

    }

  return (
    <>
     <div>
        
        </div> 
    </>
  )
}

export default ProductsMenu
