import { CartWidget } from "../cartWidget/cartWidget"
export const NavBar = ({userName, userLastName, onClick, children}) =>{
    return(
        <nav>
            <h3>La saga de El Llamado del Ocaso</h3>
            <ul>
                <li>El Llamado del Ocaso</li>
                <li>El Filo del Tiempo</li>
                <li>Sigilo Siniestro</li>
            </ul>
            <span>
            <p>{userName}</p>
            <p>{userLastName}</p>
            </span>
            <CartWidget />
            <button className='button' onClick={onClick}>
                    Boton
            </button>
            <div>{children}</div>
        </nav>
    )
}