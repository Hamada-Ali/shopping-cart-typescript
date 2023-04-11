import React from "react";
import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";

const Store = () => {
  return (
    <div className="flex flex-col justify-around">
      <h1 className="text-xl mb-10 font-semibold">Store</h1>
      <div className="w-full gap-3 justify-center items-center flex lg:flex-row flex-col md:flex-wrap">
        {storeItems.map((item) => (
          <div key={item.id} className="flex flex-1">
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
