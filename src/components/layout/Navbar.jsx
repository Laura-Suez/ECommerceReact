import { CartWidget } from "../common/CartWidget"



export const Navbar= ()=>{

    return <div>
        <h3>logo</h3>
        <ul>
            <li>Productos</li> 
            <li>Ojos</li> 
            <li>Labios</li> 
        </ul>
        <h4>Carrito</h4> 
        <CartWidget/>
        

    </div>
}