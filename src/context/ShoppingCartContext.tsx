import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartPorviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number,
  quantity: number
}

type ShoppingCartContext = {
  getItemQuantity: (id:number) => number
  increaseCartQuantity: (id:number) => void
  decreaseCartQuantity: (id:number) => void
  removeFromCart: (id:number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export default function ShoppingCartPorvider({ children }: ShoppingCartPorviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id:number) {
   return cartItems.find(item => item.id === id)?.quantity || 0
  }

function increaseCartQuantity(id:number) {
  setCartItems(currItem => {
    if (currItem.find(item => item.id === id) == null) {
      return[...currItem, {id, quantity: 1}]
    } else {
      return currItem.map(item => {
        if (item.id === id) {
          return {...item, quantity: item.quantity + 1}
        } else {
          return item
        }
      })
    }
  })
}

function decreaseCartQuantity(id:number) {
  setCartItems(currItem => {
    if (currItem.find(item => item.id === id)?.quantity === 1) {
      return currItem.filter(item => item.id !== id)
    } else {
      return currItem.map(item => {
        if (item.id === id) {
          return {...item, quantity: item.quantity - 1}
        } else {
          return item
        }
      })
    }
  })
}

function removeFromCart(id:number) {
  setCartItems(currItem => {
    return currItem.filter(item => item.id !== id)
  })
}

  return (
    <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
