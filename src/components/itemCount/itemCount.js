import { useState } from 'react'
import './itemCount.css'

export const ItemCount = ({stock, initial}) => {
    const [cantidad, setCantidad] = useState(initial)
    // function de buttons
    function agregar() {
        let newUnidades = parseInt(cantidad) +1
        setCantidad(newUnidades)
    }
    function quitar() {
        let newUnidades = parseInt(cantidad) -1
        setCantidad(newUnidades)
    }
    function mensaje() {
        if(cantidad > 0) {
            alert("Tu compra fue recibida")
        } else {
            alert("No pudimos procesar tu compra")
        }
    }

    
    // montaje
    return(
        <div>
            <div className="formItemCounter">
                <button className="cantItemButton"
                onClick={() => quitar()}
                disabled={cantidad<=initial}>-</button>
                <p>{cantidad}</p>
                <button className="cantItemButton"
                onClick={() => agregar()}
                disabled={cantidad>=stock}>+</button>
            </div>
            <button type="submit" onClick={() => mensaje()}>Compra</button>
        </div>
    )
}