import { ReactNode, createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type itemsTypes = {
  id: number;
  qty: number;
};
type shoppingCartValues = {
  getItemCount: (id: number) => number;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  removeItem: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
  cartQty: number;
  items: itemsTypes[];
};

type shoppingCartProviderProps = {
  children: ReactNode;
};

const shoppingContext = createContext({} as shoppingCartValues);

// context Hook
export const useShoppingContext = () => useContext(shoppingContext);

// Provider
const ShoppingCartProvider = ({ children }: shoppingCartProviderProps) => {
  const [isOpen, SetIsOpen] = useState(false);

  const [items, setItem] = useLocalStorage<itemsTypes[]>("cart-data", []);

  const openCart = () => SetIsOpen(true);
  const closeCart = () => SetIsOpen(false);

  const cartQty = items.reduce((qty, item) => item.qty + qty, 0);

  const getItemCount = (id: number) => {
    return items.find((item) => item.id === id)?.qty || 0;
  };

  const increaseQty = (id: number) => {
    setItem((items) => {
      // create quantity if it's not exist
      if (items.find((item) => item.id === id) == null) {
        return [...items, { id, qty: 1 }];
      } else {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty++ };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseQty = (id: number) => {
    setItem((items) => {
      // create quantity if it's not exist
      if (items.find((item) => item.id === id)?.qty === 1) {
        return items.filter((item) => item.id !== id);
      } else {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty-- };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItem = (id: number) => {
    setItem((items) => {
      return items.filter((item) => item.id !== id);
    });
  };

  return (
    <shoppingContext.Provider
      value={{
        getItemCount,
        increaseQty,
        decreaseQty,
        removeItem,
        openCart,
        closeCart,
        cartQty,
        items,
      }}
    >
      {children}
      {isOpen && <ShoppingCart />}
    </shoppingContext.Provider>
  );
};

export default ShoppingCartProvider;
