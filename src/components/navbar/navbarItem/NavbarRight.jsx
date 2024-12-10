import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();//bak
  const {carts} = useSelector(state => state.carts)

  console.log(carts)

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])

  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center border p-3 rounded-full bg-gray-200">
        <input
          className="bg-gray-200 outline-none"
          type="text"
          placeholder="Arama Yapınız..."
        />
        <BiSearch size={28} />
      </div>

      <FaRegHeart size={28} />
      <div onClick={() => navigate("cart")} className="relative">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {carts?.length}
           </div>
        <SlBasket size={25} />
      </div>
    </div>
  );
}

export default NavbarRight;
