import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import getProductById from "../firebase";


export function ItemDetailContainer () {
    const {id} = useParams();
    const [item, setItem] = useState(null)

    useEffect(()=> {
        getProductById(id).then((data) => {
            setItem(data);
        })
    }, [id]);

    return (
        <div>
            {item ? <ItemDetail item={item}/> : <p>Cargando..</p>}
        </div>
    )
}