import { Link, Links } from "react-router"


export const NavBar = () => {
  return (
    <>
        <nav
            class="navbar navbar-expand-sm navbar-dark bg-secondary"
        >
            <a class="navbar-brand" href="#">Navbar</a>
            <button
                class="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            ></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="#" aria-current="page"
                            >Home <span class="visually-hidden">(current)</span></a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="dropdownId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            >Dropdown</a
                        >
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item" href="#">Action 1</a>
                            <a class="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li>
                </ul>
                 {/* <Links to="/register"> </Links>  */}
                 <Link to="/register">
                     <span className="shadow me-1 nav-item text-light">Sign up</span>
                 </Link> 
                 <span className="fs-3 text-light"> | </span>  
                 <Link to="/login">
                     <span className=" ms-1 me-1 nav-item text-light">Sign in</span>
                 </Link>   
                
            </div>
        </nav>
        
    </>
  )
}
