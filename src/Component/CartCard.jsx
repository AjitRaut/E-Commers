import React from "react";

const CartCard = ({ cards }) => {
  if (!cards || cards.length === 0) {
    return <div>No items in the cart</div>;
  }

  return (
    <div>
      {cards.map((card, index) => (
        <div key={index}>
          <h2>{card?.card?.info?.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default CartCard;
