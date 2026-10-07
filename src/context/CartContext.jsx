import { createContext, useReducer, useState } from "react";
import cartReducer from "./CartReducer";

export const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{cart, dispatch}}>{children}</CartContext.Provider>
    );
}