import { createContext, useReducer, useEffect } from "react";
import cartReducer from "./CartReducer";

export const CartContext = createContext();

function getInitialCart() {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
}

export function CartProvider({children}) {
    const [cart, dispatch] = useReducer(cartReducer, getInitialCart());

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{cart, dispatch}}>{children}</CartContext.Provider>
    );
}