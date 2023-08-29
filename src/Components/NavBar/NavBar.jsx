import CartWidget from "../CarWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className= "navbar navbar-expand-lg bg-body-tertiary">
            <div className= "container-fluid">
                <Link to="/" className= "navbar-brand">RagnaWord</Link>
                <ul className="navbar-nav" >
                 <li className= "nav-item">
                    <NavLink to="/Category/Figuras" className= "nav-link">Figuras</NavLink>
                 </li>
                 <li className= "nav-item">
                    <NavLink to="/Category/Ropa" className= "nav-link">Ropa</NavLink>
                 </li>
                 <li className= "nav-item">
                    <NavLink to="/Category/Juegos" className= "nav-link">Juegos</NavLink>
                 </li>
            </ul>

              <CartWidget/>
            </div>
        </nav>
    );
}; 
export default NavBar;