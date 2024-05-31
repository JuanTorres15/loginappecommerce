import "./ProductList.css"
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";


export function ProductList ({ producto }) {
    
    const [productos, setProductos] = useState([]);

    // useEffect se usa para ejecutar código después de que el componente se monte
    useEffect(() => {
        const fetchProductos = async () => {
            // Obtengo la referencia a la colección "productos" en Firestore
            const productosCollection = collection(db, "productos");
            // Obtengo los documentos de la colección
            const productosSnapshot = await getDocs(productosCollection);
             // Mapeo los documentos para obtener sus datos y el id del documento
            const productosList = productosSnapshot.docs.map(doc => ({
                id: doc.id, // Incluyo el id del documento en el objeto producto
                ...doc.data() // Incluyo el resto de los datos del documento
            }));
            setProductos(productosList); // Actualizo el estado con la lista de productos
        }

          // Llamo a la función para obtener los productos
        fetchProductos();
    }, []); // Hago que solo se ejecute una vez este useEffect
     
    
    return (
        <div className="contenedor">
            {productos.map((producto)=> (
                <div className="contenedor_productos" key={producto.id}>
                    <h2 className="titulo_productos">{producto.name}</h2>
                    <p className="descripcion_productos">{producto.description}</p>
                    <img className="imagen_productos" src={producto.image} alt={productos.name}/>
                    <p className="precio_productos">Precio: ${producto.price}</p>
                    <span className="stock_productos">(Stock disponible) {producto.stock}</span>
                    <button className="boton_productos">Añadir al carrito</button>
                </div>
            ))}
        </div>
    )
}