import axios from 'axios'
import React, { useEffect } from 'react'

const useProductSliderAii = () => {
    
    const slider_api_url=()=>{
        axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
        .then((res)=>{
            console.log(res)
        })
    }

    useEffect(()=>{
         slider_api_url();
    }, [])
  return (
    <>
      
    </>
  )
}

export default useProductSliderAii
