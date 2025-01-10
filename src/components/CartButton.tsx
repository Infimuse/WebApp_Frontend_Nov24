"use client";

import { FaCartPlus } from "react-icons/fa";
import Link from "next/link";

const CartButton = () => {
  

  return (
    <>
      { (
        <Link
          href="/cart"
          className="fixed right-4 bottom-[70px] z-[1000] p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-400 transition duration-300"
        >
          <FaCartPlus size={18} />
        </Link>
      )}
    </>
  );
};

export default CartButton;
