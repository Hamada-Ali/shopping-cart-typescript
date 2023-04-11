import React, { useEffect } from "react";
import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingContext } from "../context/shoppingCartContext";

type StoreItemsProps = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
};


const StoreItem = ({ id, name, imgUrl, price }: StoreItemsProps): any => {
  const { getItemCount, increaseQty, decreaseQty, removeItem } = useShoppingContext();
  
  const qty =  getItemCount(id);


  return (
    <div className="bg-white p-5 rounded-lg min-h-[382px]">
      <img
        src={imgUrl}
        className="lg:h-[200px] w-[400px] h-[400px] lg:w-[200px] object-cover"
        alt=""
      />
      <div className="flex-col flex">
        <h3 className="text-base flex justify-between mb-4 mt-4 items-center">
          <span className="font-semibold">{name}</span>
          <span className="text-gray-500">{formatCurrency(price)}</span>
        </h3>
        <div>
          {qty === 0 ? (
            <button
            onClick={() => increaseQty(id)}
              type="button"
              className="p-2 bg-blue-500 text-white
            rounded-lg hover:bg-blue-600 duration-200 w-full"
            >
              + Add To Cart
            </button>
          ) : (
            <div className="flex justify-center items-center gap-2 flex-col">
              <div className="flex gap-1 items-center">
                <button onClick={() => decreaseQty(id)} className="p-[7px] rounded-md text-white bg-blue-500 cursor-pointer hover:bg-blue-600 duration-200">
                  -
                </button>
                <p>
                  <span className="font-bold">{qty}</span> in cart
                </p>
                <button onClick={() => increaseQty(id)} className="p-[7px] rounded-md text-white bg-blue-500 cursor-pointer hover:bg-blue-600 duration-200">
                  +
                </button>
              </div>
              <div className="flex gap-1 items-center">
                <button
                onClick={() => removeItem(id)}
                  type="button"
                  className="p-2 rounded-sm bg-red-500 text-white
             hover:bg-red-600 duration-200"
                >
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
