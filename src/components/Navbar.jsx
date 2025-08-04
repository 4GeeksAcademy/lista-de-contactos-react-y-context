import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const { pathname } = useLocation();

    const OcultarBoton = pathname.startsWith("/formulario");

    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <div className="ms-auto">
                    {!OcultarBoton && (
                        <Link to="/formulario">
                            <button className="btn btn-success my-2">Add new contact</button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
