import React, { useState } from "react";
import { Recomended_IMG_URL } from "../Utils/Url";
import { useDispatch } from "react-redux";
import { removenormal_item } from "../Utils/cartSlice";

const CartCard = ({ cards }) => {
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState(cards.map(() => 1));

  if (!cards || cards.length === 0) {
    return (
      <div className="flex justify-center place-items-center">
        <h1>No items in cart</h1>
      </div>
    );
  }

  const calculateFees = (card, quantity) => {
    const price =
      card?.card?.info?.defaultPrice / 100 || card?.card?.info?.price / 100;
    const itemTotal = Math.floor(price) * quantity;
    const deliveryFee = Math.floor(price / 14);
    const platformFee = Math.floor(price / 60);
    const gst = Math.floor(itemTotal * 0.05);
    const totalToPay = itemTotal + deliveryFee + platformFee + gst;

    return {
      itemTotal,
      deliveryFee,
      platformFee,
      gst,
      totalToPay,
    };
  };

  const handleRemove = (index) => {
    dispatch(removenormal_item(index));
  };

  const handleIncrease = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index ? qty + 1 : qty))
    );
  };

  const handleDecrease = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index ? Math.max(1, qty - 1) : qty))
    );
  };

  return (
    <div>
      {cards.map((card, index) => {
        const { itemTotal, deliveryFee, platformFee, gst, totalToPay } =
          calculateFees(card, quantities[index]);

        return (
          <div key={index} className="bg-white p-4 shadow rounded mb-4">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={Recomended_IMG_URL + card?.card.info?.imageId}
                alt="Restaurant"
                className="w-12 h-12 rounded"
              />
              <div>
                <h3 className="text-lg">{card?.card.info?.name}</h3>
                <p className="truncate w-[300px] h-[26px]">
                  {card?.card.info?.description}..
                </p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrease(index)}
                    className="bg-gray-200 py-1 px-2"
                  >
                    -
                  </button>
                  <span>{quantities[index]}</span>
                  <button
                    onClick={() => handleIncrease(index)}
                    className="bg-gray-200 py-1 px-2"
                  >
                    +
                  </button>
                </div>
              </div>
              <span>₹{itemTotal}</span>
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
                <span>₹{itemTotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span>₹{platformFee}</span>
              </div>
              <div className="flex justify-between">
                <span>GST</span>
                <span>₹{gst}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>TO PAY</span>
                <span>₹{totalToPay}</span>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <div className="flex justify-end">
                <button
                  onClick={() => handleRemove(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Remove
                </button>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartCard;
