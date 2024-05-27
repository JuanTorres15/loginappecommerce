import "./NavBar.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../CartContext";
import { useContext } from "react";


export function NavBar () {
    
    const { cantidadAgregadaCarrito } = useContext(CartContext)

    return(
        <nav className="navBar">
            <ul className="navBarList">
                <li className="navBarCart">
                    <Link>
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                        {cantidadAgregadaCarrito > 0 && <span className="navBarCartCount">{cantidadAgregadaCarrito}</span>}
                    </Link>
                </li>
                <li className="navBarItem"><Link to="/">Inicio</Link></li>
                <li className="navBarItem"><Link to="./Laptops">Catálogo de Laptops</Link></li>
                <li className="navBarItem"><Link to="/Moviles">Catálogo de Móviles</Link></li>
                <li className="navBarItem"><Link to="Consolas">Catálogo de Consolas</Link></li>
                <li className="navBarItem"><Link to="Contacto">Contacto</Link></li>
            </ul>
        </nav>
    )
}
