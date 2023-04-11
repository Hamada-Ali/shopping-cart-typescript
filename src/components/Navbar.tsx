import React from "react";
import { Link } from "react-router-dom";
import { useShoppingContext } from "../context/shoppingCartContext";

const Navbar = () => {
  const { openCart, cartQty } = useShoppingContext();

  return (
    <div className=" bg-white shadow-lg w-full mb-4 flex p-4 h-[76px] ">
      <ul className="list-none me-auto flex justify-center items-center gap-2">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Store"}>Store</Link>
        </li>
        <li>
          <Link to={"/About"}>About</Link>
        </li>
      </ul>
            {/* Button */}
      {cartQty > 0 && cartQty && 
      <button
      onClick={openCart}
        type="button"
        className="p-3 menu relative outline outline-1 outline-[#333]  bg-white rounded-full hover:outline-none hover:bg-blue-200 
        transition-all ease-in-out duration-200 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          version="1.1"
        >
          <title>shopping_cart [#1135]</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-220.000000, -3119.000000)"
              fill="#186EF1"
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M180.846448,2977 L167.153448,2977 C166.544448,2977 166.077448,2976.461 166.163448,2975.859 L167.306448,2967.859 C167.376448,2967.366 167.798448,2967 168.296448,2967 L168.999448,2967 L168.999448,2969 C168.999448,2969.552 169.447448,2970 169.999448,2970 C170.552448,2970 170.999448,2969.552 170.999448,2969 L170.999448,2967 L176.999448,2967 L176.999448,2969 C176.999448,2969.552 177.447448,2970 177.999448,2970 C178.552448,2970 178.999448,2969.552 178.999448,2969 L178.999448,2967 L179.703448,2967 C180.201448,2967 180.623448,2967.366 180.693448,2967.859 L181.836448,2975.859 C181.922448,2976.461 181.455448,2977 180.846448,2977 L180.846448,2977 Z M170.999448,2964 C170.999448,2962.346 172.345448,2961 173.999448,2961 C175.654448,2961 176.999448,2962 176.999448,2964 L176.999448,2965 L170.999448,2965 L170.999448,2964 Z M183.979448,2976.717 L182.550448,2966.717 C182.410448,2965.732 181.566448,2965 180.570448,2965 L178.999448,2965 L178.999448,2964 C178.999448,2961 176.756448,2959 173.999448,2959 C171.243448,2959 168.999448,2961.243 168.999448,2964 L168.999448,2965 L167.734448,2965 C166.739448,2965 165.589448,2965.732 165.448448,2966.717 L164.020448,2976.717 C163.848448,2977.922 164.783448,2979 166.000448,2979 L181.999448,2979 C183.216448,2979 184.151448,2977.922 183.979448,2976.717 L183.979448,2976.717 Z"
                  id="shopping_cart-[#186EF1]"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <span className="absolute w-5 text-sm rounded-full bg-red-600 text-white -right-2 -bottom-1">
          {cartQty}
        </span>
      </button>
}
      {/* Button */}
    </div>
  );
};

export default Navbar;
