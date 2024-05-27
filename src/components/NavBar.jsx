import "./NavBar.css"
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";


export function NavBar () {

    return(
        <nav className="navBar">
            <ul className="navBarList">
                <li className="navBarCart">
                    <Link to="/carrito">
                        <CartWidget/>
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
