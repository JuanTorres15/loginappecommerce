import "./Item.css"

export function Item ({item}) {
    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
        </div>
    )
}