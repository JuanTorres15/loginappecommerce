import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";


export function ProductList () {
    
    const [productos, setProductos] = useState([]);

    useEffect (() => {
        const fetchProductos = async () =>{
            const productosCollection = collection(db, "productos");
            const productosSnapshot = await getDocs(productosCollection);
            const productosList = productosSnapshot.docs.map(doc => doc.data());
            setProductos(productosList);
        }

        fetchProductos();
    }, []);
     
    
    return (
        <div>
            {productos.map((productos)=> (
                <div key={productos.id}>
                    <h2>{productos.name}</h2>
                    <p>{productos.description}</p>
                    <p>${productos.price}</p>
                    <img src={productos.image} alt={productos.name}/>
                    <p>{productos.stock}</p>
                </div>
            ))}
        </div>
    )
}