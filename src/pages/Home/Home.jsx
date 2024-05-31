import "../pages/Home.css"
import { ProductList } from "../../components/ProductList/ProductList"


export function Home () {

    return(
        <div className="ContenedorHome">
            <h1>Bienvenido a mi practica de Ecommerce con Login!</h1>
            <ProductList/>
        </div>
    )
}