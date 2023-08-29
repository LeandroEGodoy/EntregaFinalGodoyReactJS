import CartWidget from "../CarWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className= "navbar navbar-expand-lg bg-body-tertiary">
            <div className= "container-fluid">
                <Link to="/" className= "navbar-brand">RagnaWord</Link>
                <ul className="navbar-nav" >
                 <li className= "nav-item">
                    <Link to="/vehiculos" className= "nav-link">Figuras</Link>
                 </li>
                 <li className= "nav-item">
                    <Link to="/mueble" className= "nav-link">Ropa</Link>
                 </li>
                 <li className= "nav-item">
                    <Link to="/tecnologia" className= "nav-link">Juegos</Link>
                 </li>
            </ul>

              <CartWidget/>
            </div>
        </nav>
    );
}; 
export default NavBar;