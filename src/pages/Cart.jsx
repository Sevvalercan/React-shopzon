import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts, totalAmount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal()); // Update cart totals whenever the component mounts or `carts` changes.
  }, [dispatch, carts]);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Sepetim</h1>
      {carts?.length > 0 ? (
        <div>
          {carts.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-end text-2xl mt-10">
            <span className="font-bold mr-2">TOPLAM TUTAR:</span>
            <span className="font-bold text-3xl text-green-600">{totalAmount} TL</span>
          </div>
        </div>
      ) : (
        <div className="text-center text-xl text-gray-600 mt-10">
          Sepetiniz boş
        </div>
      )}
    </div>
  );
};

export default Cart;
