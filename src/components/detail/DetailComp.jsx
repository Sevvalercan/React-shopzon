import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1); // Start with a default value of 1

  // Decrement Quantity
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1); // Ensure quantity stays above 0
  };

  // Increment Quantity
  const increment = () => {
    setQuantity(quantity + 1);
  };

  // Add to Cart
  const addBasket = () => {
    if (quantity > 0) {
      dispatch(
        addToCart({
          id: productDetail?.id,
          title: productDetail?.title,
          image: productDetail?.image, // Corrected image property
          price: productDetail?.price,
          quantity: quantity,
        })
      );
    }
  };

  return (
    <div className="flex gap-10 my-10">
      {/* Display Product Image */}
      <img
        className="w-[700px] h-[500px] object-cover"
        src={productDetail?.image} // Use `image` if the API provides a single image
        alt={productDetail?.title || "Product"}
      />
      <div>
        {/* Product Details */}
        <div className="text-4xl font-bold">{productDetail?.title}</div>
        <div className="my-2 text-2xl">{productDetail?.description}</div>
        <div className="my-2 text-xl text-red-500">
          Rating: {productDetail?.rating?.rate}
        </div>
        <div className="my-2 text-xl text-red-500">
          Count: {productDetail?.rating?.count}
        </div>
        <div className="text-5xl font-bold">
          {productDetail?.price}
          <span className="text-sm"> TL</span>
        </div>

{/* Quantity Controls */}
<div className="flex items-center gap-3 my-4 border border-gray-300 rounded-full w-fit px-4 py-2">
  <div
    onClick={decrement}
    className="text-2xl cursor-pointer w-10 h-10 flex items-center justify-center"
  >
    -
  </div>
  <input
    className="w-10 h-10 text-center text-2xl font-bold border-none"
    type="text"
    readOnly
    value={quantity}
  />
  <div
    onClick={increment}
    className="text-2xl cursor-pointer w-10 h-10 flex items-center justify-center"
  >
    +
  </div>
</div>




        {/* Add to Cart Button */}
        <div
          onClick={() => {
            addBasket();
            alert("Ürün sepete eklendi!");
          }}
          className="my-4 border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
