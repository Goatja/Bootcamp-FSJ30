import { Link, Links } from "react-router"


export const NavBar = () => {
  return (
    <>
        <nav
            className="navbar navbar-expand-sm navbar-dark  position-fixed top-0 container"
            style={{zIndex:'1', background:'#F0E14A'}}
        >
            <a className="navbar-brand" href="#">Ricky and Morty</a>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            ></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" href="#" aria-current="page"
                            >Home <span className="visually-hidden">(current)</span></a
                        >
                    </li>
                    <li className="nav-item">
                        <Link to="/search-character">
                             <span className="shadow me-1 nav-item text-light">Search Charater</span>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="dropdownId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            >Dropdown</a
                        >
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">Action 1</a>
                            <a className="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li>
                </ul>
                 {/* <Links to="/register"> </Links>  */}
                 <Link to="/register">
                     <span className="shadow me-1 nav-item text-light">SignUp</span>
                 </Link> 
                 <span className="fs-3 text-light"> | </span>  
                 <Link to="/login">
                     <span className=" ms-1 me-1 nav-item text-light">SignIn</span>
                 </Link>   
                
            </div>
        </nav>
        
    </>
  )
}
