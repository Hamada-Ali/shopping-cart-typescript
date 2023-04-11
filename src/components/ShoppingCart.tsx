import React from "react";
import { useShoppingContext } from "../context/shoppingCartContext";
import { motion } from "framer-motion";
import StoreItem from "./StoreItem";
import CartItem from "./CartItem";
import { formatCurrency } from "../utils/formatCurrency";
import storeItems from "../data/items.json";

const ShoppingCart = () => {
  const { closeCart, items } = useShoppingContext();
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="fixed top-0 right-0 w-full md:max-w-[375px] h-[100vh] bg-white drop-shadow-md  z-[999]"
    >
      <div className=" flex flex-row justify-between items-center p-4 ">
        <h1 className="inline-flex text-2xl font-medium text-gray-500 dark:text-gray-400 ">
          Cart
        </h1>
        <button
          type="button"
          onClick={closeCart}
          className="text-gray-400 cursor-pointer  text-3xl hover:text-black transition-all duration-200 ease-in-out"
        >
          x
        </button>
      </div>
      <div className="flex flex-col m-3 align-middle gap-4">
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="flex flex-row-reverse">
            Total {formatCurrency(items.reduce((total, item) => {
        const TheItem = storeItems.find((i) => i.id === item.id);
        return total + (TheItem?.price || 0) * item.qty
}, 0))}
          </div>
        </div>
    </motion.div>
  );
};

export default ShoppingCart;
