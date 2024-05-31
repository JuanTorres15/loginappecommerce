import { useState } from "react";
import "./Login.css"
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";

const baseUrl = "http://localhost:3001/usuarios";

export function Login () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToNewPage, setRedirectToNewPage] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`${baseUrl}?username=${username}&password=${password}`);
            const userData = response.data;
            
            if (userData.length > 0) {
                setRedirectToNewPage(true); 
            } else {
                console.error('Nombre de usuario o contraseña incorrectos');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    };

    if (redirectToNewPage) {
        return <Navigate to="/home" />;
    }

    return(
        <div className="PadreContenedor">
            <div className="LoginContainer">
                <form className="Formulario" onSubmit={handleSubmit}>
                    <h2>Ingresar Usuario</h2>
                    <div className="InputContainer">
                        <div className="Input">
                            <FontAwesomeIcon icon="fa-solid fa-user"/> 
                            <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} required> 
                            </input>                    
                            <label >Usuario</label>
                        </div>
                        <div className="Input">
                            <FontAwesomeIcon icon="fa-solid fa-lock"/>
                            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required>
                            </input>
                            <label>Contraseña</label>
                        </div>          
                    </div>
                    <div>
                        <button className="Button" type="submit">Entrar a la pagina</button>
                        <div className="Registrar">
                            <p>No tengo cuenta. <Link to="/registrarse">UNETE ACÁ</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

}