import React from "react";
import { Login } from "../components/Login/Login"
import "./Routes.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Register } from "../pages/Registrarse";
import { Home } from "../pages/Home";
import { NavBar } from "../components/NavBar/NavBar";
import { CartProvider } from "../CartContext";

function AppRouter() {
    const location = useLocation();
    const hideNavBarRoutes = ["/", "/registrarse"]

    return(
        <>
            {!hideNavBarRoutes.includes(location.pathname) && <NavBar/>}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/registrarse" element={<Register />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    )
}


function Router () {

    return(
        <CartProvider>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </CartProvider>
    )
}


export default Router;