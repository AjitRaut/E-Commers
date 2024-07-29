import React from "react";
import { Recomended_IMG_URL } from "../Utils/Url";

const CartCard = ({ cards }) => {
  if (!cards || cards.length === 0) {
    return <div>No items in the cart</div>;
  }

  return (
    <div>
      {cards.map((card, index) => (
        <div key={index}>
          <div className="bg-white p-4 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="flex items-center space-x-4 mb-4">
        <img src={Recomended_IMG_URL + card?.card.info?.imageId} alt="Restaurant" className="w-12 h-12 rounded" />
        <div>
          <h3 className="text-lg">{card?.card.info?.name}</h3>
          <p>{card?.card.info?.name}</p>
          <div className="flex items-center space-x-2">
            <button className="bg-gray-200 py-1 px-2">-</button>
            <span>1</span>
            <button className="bg-gray-200 py-1 px-2">+</button>
          </div>
        </div>
        <span>₹{card?.card?.info?.defaultPrice / 100 || card?.card?.info?.price / 100
        }</span>
      </div>
      <div className="mb-4">
        <p>Opt in for No-contact Delivery</p>
        <input type="checkbox" className="mr-2" checked readOnly />
        Our delivery partner will call to confirm.
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-semibold">Bill Details</h4>
        <div className="flex justify-between">
          <span>Item Total</span>
          <span>₹{card?.card?.info?.defaultPrice / 100 || card?.card?.info?.price / 100
        }</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>₹29</span>
        </div>
        <div className="flex justify-between">
          <span>Platform Fee</span>
          <span>₹6</span>
        </div>
        <div className="flex justify-between">
          <span>GST</span>
          <span>₹50.03</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>TO PAY</span>
          <span>₹464</span>
        </div>
      </div>
    </div>
        </div>
      ))}
    </div>
  );
};

export default CartCard;
