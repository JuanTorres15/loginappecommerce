import "./NavBar.css"
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";


export function NavBar () {

    return(
        <nav className="navBar">
            <ul className="navBarList">
                <li className="navBarCart">
                    <Link to="/carrito">
                        <CartWidget/>
                    </Link>
                </li>
                <li className="navBarItem"><Link to="/home">Inicio</Link></li>
                <li className="navBarItem"><Link to="./laptops">Catálogo de Laptops</Link></li>
                <li className="navBarItem"><Link to="/moviles">Catálogo de Móviles</Link></li>
                <li className="navBarItem"><Link to="consolas">Catálogo de Consolas</Link></li>
                <li className="navBarItem"><Link to="contacto">Contacto</Link></li>
            </ul>
        </nav>
    )
}
