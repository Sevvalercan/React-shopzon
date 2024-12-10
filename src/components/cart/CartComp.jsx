import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(cart.id)); // Dispatch removeFromCart action with the item's ID.
  };

  return (
    <div className="my-5 p-5 border-b flex items-center gap-5">
      <img
        className="w-32 h-32 object-cover rounded-lg shadow-md"
        src={cart?.image}
        alt={cart?.title}
      />
      <div className="flex-1">
        <div className="text-lg font-bold mb-2">{cart?.title}</div>
        <div className="text-sm text-gray-600">{cart?.description}</div>
      </div>
      <div className="font-bold text-xl text-green-600">
        {cart?.price} TL x {cart?.quantity}
      </div>
      <button
        className="bg-red-500 text-white px-5 py-2 text-lg rounded-md hover:bg-red-600 transition"
        onClick={handleRemove}
      >
        Ürünü Sil
      </button>
    </div>
  );
};

export default CartComp;
