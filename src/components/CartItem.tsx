import React from "react";
import { useShoppingContext } from "../context/shoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";
type CartItemProps = {
  id: number;
  qty: number;
};

const CartItem = ({ id, qty }: CartItemProps) => {
  const { removeItem } = useShoppingContext();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) null;

  const price = Number(item?.price)

  return (
    <div className="flex justify-between">
      <div className="flex items-center  gap-1">
        <img
          alt="item image"
          src={item?.imgUrl}
          className="w-[125px] h-[75px] object-cover"
        />
        <div className="">
          {item?.name}{" "}
          {qty > 1 && (
            <span className="text-gray-400 text-[.65rem]">
              {qty}x
            </span>
          )}
        <div className="text-gray-400 text-[.75rem]">
            {formatCurrency(price)}
        </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
      <span className="text-sm">{formatCurrency((price) * Number(qty))}</span>
      <button type="button" className="bg-red-400 text-white pl-[5px] pr-[5px] ml-[3px] rounded-[2px]  text-sm" onClick={() => removeItem(item ? item?.id: 0)}>x</button>
      </div>
    </div>
  );
};

export default CartItem;
