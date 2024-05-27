import "./ItemDetail.css"

export function ItemDetail ({item}) {
    return (
        <div className="ItemDetail">
            <img src={item.image} alt={item.name}/>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <button>Agregar al carrito</button>
        </div>
    )
}