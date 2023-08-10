import CartWidget from "../CarWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className= "navbar navbar-expand-lg bg-body-tertiary">
            <div className= "container-fluid">
            <a href="#" className= "navbar-brand">MercadoCoder</a>
            <ul className="navbar-nav" >
                <li className= "nav-item">
                    <a className= "nav-link active" href="#">Vehiculos</a>
                </li>
                <li className= "nav-item">
                    <a className= "nav-link active" href="#">Mueble</a>
                </li>
                <li className= "nav-item">
                    <a className= "nav-link active" href="#">Tecnologia</a>
                </li>
            </ul>

            <CartWidget/>

            </div>
        </nav>
    );
}; 
export default NavBar;