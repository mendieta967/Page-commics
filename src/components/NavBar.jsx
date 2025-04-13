import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import "./NavBar.css";

const LandingNavBar = () => {
  const { handleLogaut } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="navbar px-4 py-2">
      <div className="container-fluid d-flex align-items-center justify-content-between  flex-wrap">
        <div className="navbar-brand  gap-3">
          <img
            src="/icono-perfil.jpg"
            alt="icon"
            className="rounded-circle"
            width="80"
            height="80"
            onClick={() => navigate("/home")}
          />
          <div className="d-flex gap-3 nav-links">
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${
                  isActive ? "text-warning fw-bold" : "text-light"
                }`
              }
              to="/marvel"
            >
              Marvel
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${
                  isActive ? "text-warning fw-bold" : "text-light"
                }`
              }
              to="/dc"
            >
              DC
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${
                  isActive ? "text-warning fw-bold" : "text-light"
                }`
              }
              to="/marvel"
            >
              favoritos
            </NavLink>
          </div>
        </div>

        <div className="form-navbar">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="search-form-button btn btn-danger d-flex align-items-center gap-2"
              type="submit"
            >
              <FaSearch />
            </button>
          </form>
        </div>

        {/* Botones de acción */}
        <div className="icon-navbar d-flex align-items-center justify-content-center gap-2">
          <button className="btn btn-light">🌐</button>
          <button className="btn btn-light">🎨</button>
          <button
            type="button"
            className="btn btn-danger fw-bold d-flex align-items-center gap-2"
            onClick={() => {
              handleLogaut();
              navigate("/");
            }}
          >
            <FaSignOutAlt />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavBar;

{
  /* import { Link, NavLink, useNavigate } from "react-router-dom";


const NavBar = () => {

  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">
     Título de la Navbar
      <Link className="navbar-brand text-uppercase fw-bold" to="/home">
        Asociaciones
      </Link>

      {/* Sección de enlaces centrados 
      <div className="navbar-collapse justify-content-start">
        <div className="navbar-nav gap-3">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${
                isActive ? "text-warning fw-bold" : "text-light"
              }`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${
                isActive ? "text-warning fw-bold" : "text-light"
              }`
            }
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${
                isActive ? "text-warning fw-bold" : "text-light"
              }`
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      {/* Botón Logout en la esquina superior derecha 
      <div className="d-flex align-items-center gap-3">
      

      </div>
    </nav>
  );
};

export default NavBar;
*/
}
