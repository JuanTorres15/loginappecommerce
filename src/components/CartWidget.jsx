import "./CartWidget.css"
import { useContext } from "react"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../CartContext";

export function CartWidget () {
    const {cantidadAgregadaCarrito} = useContext(CartContext)

    return (
        <div className="navBarCart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="navBarCartCount">{cantidadAgregadaCarrito()}</span>
        </div>

    )
}