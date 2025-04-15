import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { Menu, Search, Globe2, Palette, LogOut, X } from "lucide-react";
import "./NavBar.css";

const LandingNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigate = useNavigate();
  const { handleLogaut } = useAuth();

  const handleLogautNavBar = () => {
    handleLogaut();
    navigate("/");
  };

  const ActionButton = ({ icon, onClick }) => (
    <button onClick={onClick} className="action-button">
      {icon}
    </button>
  );

  return (
    <div className="container-navbar">
      <nav className="navbar px-4 py-2">
        <div className="navbar-container">
          <div className="navbar-row">
            <div className="navbar-brand">
              <img
                src="/icono-perfil.jpg"
                alt="Profile"
                className="rounded-circle"
                width="100"
                height="100"
              />
              {/* Desktop Navigation */}
              <div className="desktop-nav">
                <Link to="/home" className="nav-link active">
                  Home
                </Link>
                <Link to="/marvel" className="nav-link">
                  Marvel
                </Link>
                <Link to="/dc" className="nav-link">
                  DC
                </Link>
                <Link to="/favorites" className="nav-link">
                  Favorites
                </Link>
              </div>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className="search-container">
              <div className="search-wrapper">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                <button className="search-button">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Mobile Action Buttons */}
            <div className="mobile-actions">
              <ActionButton icon={<Globe2 size={20} />} />
              <ActionButton icon={<Palette size={20} />} />
              <ActionButton
                icon={<Search size={20} />}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="menu-button"
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Desktop Action Buttons */}
            <div className="desktop-actions">
              <ActionButton icon={<Globe2 size={20} />} />
              <ActionButton icon={<Palette size={20} />} />
              <button
                className="logout-button"
                onClick={() => handleLogautNavBar()}
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Search Bar - Expandable */}
          {isSearchOpen && (
            <div className="mobile-search">
              <div className="mobile-search-wrapper">
                <input
                  type="text"
                  placeholder="Search..."
                  className="mobile-search-input"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="mobile-search-close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          )}

          {/* Mobile menu */}
          {isOpen && (
            <div className="mobile-menu">
              <div className="mobile-menu-content">
                <Link to="/marvel" className="mobile-nav-link">
                  Marvel
                </Link>
                <Link to="/dc" className="mobile-nav-link">
                  DC
                </Link>
                <Link to="/favorites" className="mobile-nav-link">
                  Favorites
                </Link>
                {/* Mobile Action Button */}
                <div className="mobile-logout">
                  <button
                    className="mobile-logout-button"
                    onClick={() => handleLogautNavBar()}
                  >
                    <LogOut size={20} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
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
