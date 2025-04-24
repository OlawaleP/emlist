import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { CartContext } from "@/lib/context/CartState";
import { ROUTES } from "@/lib/constants/routes";

import Tooltip from "./Tooltip";

const CartIcon = () => {
  const { totalCartQuantity } = useContext(CartContext);

  return (
    <div className="w-fit lg:p-2 hover:bg-nuetral-light duration-300 rounded-full group">
      <Tooltip content="Cart items" position="bottom">
        <Link href={ROUTES?.CART} className="relative">
          <Image
            src="/icons/shopping-cart.svg"
            alt="menu"
            width={24}
            height={24}
            className="object-contain w-6 h-6"
          />
          {totalCartQuantity > 0 && (
            <span className="absolute -top-3 -right-2 px-2 py-1 bg-light-green rounded-full text-xs">
              {totalCartQuantity}
            </span>
          )}
        </Link>
      </Tooltip>
    </div>
  );
};

export default CartIcon;
