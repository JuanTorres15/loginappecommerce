import {useState} from "react";


export function ItemCount ({stock, initial, onAdd}) {
    
    const [count, setCount] = useState(initial)

    const incrementarCount = () => {
        if (count < stock) setCount(count + 1);
    };

    const disminuirCount = () => {
        if (count > 0) setCount(count - 1);
    };
    
    return (
        <div>
            <button onClick={disminuirCount}>-</button>
            <span>{count}</span>    
            <button onClick={incrementarCount}>+</button>
            <button onClick={()=> onAdd(count)}>Agregar al carrito</button>    
        </div>
    )
}