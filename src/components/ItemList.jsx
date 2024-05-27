import "./ItemList.css"
import Item from "./Item"

export function ItemList ( items ) {
    return(
       <div>
            {items.map((item)=>(
                <Item key={item.id} item={item}/>
        ))}        
       </div> 
    )
}