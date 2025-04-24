import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Menu, Search, Globe2, Palette, LogOut, X } from "lucide-react";
import "./NavBar.css";

const LandingNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const navigate = useNavigate();
  const { search, setSearch } = useSearch();
  const location = useLocation();
  const { handleLogaut } = useAuth();
  const { t } = useTranslation();

  useEffect(() => {
    setSearch(""); // Limpiar la barra de búsqueda al cambiar de ruta
  }, [location.pathname]);

  const handleLogautNavBar = () => {
    handleLogaut();
    navigate("/");
  };

  const ActionButton = ({ icon, onClick }) => (
    <button onClick={onClick} className="action-button">
      {icon}
    </button>
  );

  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  const handleLenguageChange = (language) => {
    i18n.changeLanguage(language);
    setOpen(false);
  };

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
                onClick={() => navigate("/home")}
              />
              {/* Desktop Navigation */}
              <div className="desktop-nav">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
                <Link to="/marvel" className="nav-link">
                  Marvel
                </Link>
                <Link to="/dc" className="nav-link">
                  DC
                </Link>
                <Link to="/favorites" className="nav-link">
                  {t("favorites")}
                </Link>
              </div>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className="search-container">
              <div className="search-wrapper">
                <input
                  type="text"
                  value={search}
                  placeholder={t("search")}
                  className="search-input"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {!isFocused && (
                  <button className="search-button">
                    <Search size={20} />
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Action Buttons */}
            <div className="mobile-actions">
              <ActionButton icon={<Globe2 size={22} />} onClick={toggleMenu} />
              {open && (
                <div className="language-menu">
                  <button onClick={() => handleLenguageChange("es")}>
                    <span>🇪🇸</span>
                  </button>
                  <button onClick={() => handleLenguageChange("en")}>
                    <span>🇺🇸</span>
                  </button>
                  <button onClick={() => handleLenguageChange("pt")}>
                    <span>🇧🇷</span>
                  </button>
                </div>
              )}
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
              <ActionButton icon={<Globe2 size={22} />} onClick={toggleMenu} />
              {open && (
                <div className="language-menu">
                  <button onClick={() => handleLenguageChange("es")}>
                    <span>🇪🇸</span>
                  </button>
                  <button onClick={() => handleLenguageChange("en")}>
                    <span>🇺🇸</span>
                  </button>
                  <button onClick={() => handleLenguageChange("pt")}>
                    <span>🇧🇷</span>
                  </button>
                </div>
              )}
              <ActionButton icon={<Palette size={22} />} />
              <button className="logout-button" onClick={handleLogaut}>
                <LogOut size={22} />
              </button>
            </div>
          </div>

          {/* Mobile Search Bar - Expandable */}
          {isSearchOpen && (
            <div className="mobile-search">
              <div className="mobile-search-wrapper">
                <input
                  type="text"
                  value={search}
                  placeholder="Buscar héroes..."
                  className="mobile-search-input"
                  onChange={(e) => setSearch(e.target.value)}
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
                  Favoritos
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
