import React from 'react'

const Header = () => {
  return (
    <>
      <header className=' w-full  bg-slate-50 h-20 fixed top-0'>
        <div className=" max-w-7xl m-auto h-full px-3 bg-slate-50 box shadow-sm flex justify-between font-serif">
            <div className='flex justify-center items-center'>
                logo
            </div>
            <div className='flex '>
                <ul className=' flex justify-center items-center gap-6 '>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header
