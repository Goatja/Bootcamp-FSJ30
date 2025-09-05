
import { Link, useLocation } from "react-router";


// Cambia los <a> por <Link> y usa useLocation para el estilo "active"

export const NavBar = () => {
    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow-sm" style={{ backgroundColor: '#BBDCE5' }}>
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold text-dark" to="/">MyShop</Link>
                <button
                    className="navbar-toggler bg-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-3">
                        <li className="nav-item">
                            <Link
                                className={`nav-link${location.pathname === "/" ? " active" : ""}`}
                                to="/"
                            >
                               <i title="Home" className={`bi bi-house fs-3 text-dark fw-bold`}></i>

                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link${location.pathname === "/products" ? " active" : ""}`}
                                to="/products"
                            >
                                <i title="Products" className="bi bi-box fs-3 text-dark fw-bold"></i>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className={`nav-link${location.pathname === "/login" ? " active" : ""}`}
                                to="/login"
                            >
                                <i title="Login" className="bi bi-person fs-3 text-dark fw-bold"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
