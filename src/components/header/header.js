import { useActions } from "../../hooks"
import { Link } from "react-router-dom";

export function Header() {
  const { getCartCount, toogleCart } = useActions();

  return (
    <nav className="navbar navbar-expand-lg bg-dark sticky-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={{color:"white"}}>React Bootcamp Restaurant Menu Created by UDK</Link>
        <Link to="/About" className="navbar-brand" style={{marginLeft:"30px", color:"white"}}>About</Link>
        <Link to="/Contact" className="navbar-brand" style={{marginLeft:"30px", color:"white"}}>Contact</Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          </ul>
          <div className="d-flex">


            <Link to="/Sepetim"
              className="btn btn-danger">Sepetim {`(${getCartCount()})`}
            </Link>

          </div>
        </div>
      </div>
    </nav>
  )
}