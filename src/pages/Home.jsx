import "../pages/Home.css"


export function Home () {

    const imageUrl = "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/10/13/16971904238942.jpg"    

    return(
        <div className="ContenedorHome">
            <h1>Hola bebé</h1>
            <div>
                <img src={imageUrl} alt="BadBunnybb" />      
            </div>
        </div>
    )
}