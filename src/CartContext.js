import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cantidadCarrito, setCantidadCarrito] = useState([]);

    const agregarAlCarrito = (item) => {
        setCantidadCarrito([...cantidadCarrito, item]);
    };

    const cantidadAgregadaCarrito = () => {
        return cantidadCarrito.length;
    }

    return (
        <CartContext.Provider value={{ cantidadCarrito, agregarAlCarrito, cantidadAgregadaCarrito }}>
            {children}
        </CartContext.Provider>
    )


}

