"use client";

import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../context/ThemeContext";
import { useContext, useState, useEffect } from "react";
import i18n from "i18next";
import { Menu, Search, Globe2, Palette, LogOut, X } from "lucide-react";
import "./NavBar.css";

const LandingNavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [openLanguageMenu, setOpenLanguageMenu] = useState(false);
  const [openPaletteMenu, setOpenPaletteMenu] = useState(false);
  const [isPaletaColors, setIsPaletaColors] = useState(false);

  const { search, setSearch } = useSearch();
  const { handleLogaut } = useAuth();
  const { t } = useTranslation();
  const { themeColor, changeTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSearch(""); // limpiar búsqueda al cambiar ruta
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".language-menu") &&
        !event.target.closest(".language-button")
      ) {
        setOpenLanguageMenu(false);
      }
      if (
        !event.target.closest(".palette-menu") &&
        !event.target.closest(".palette-button")
      ) {
        setOpenPaletteMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogautNavBar = () => {
    handleLogaut();
    navigate("/");
  };

  const toggleLanguageMenu = () => setOpenLanguageMenu((prev) => !prev);
  const togglePaletteMenu = () => setOpenPaletteMenu((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setOpenLanguageMenu(false);
  };

  const handlePaletaColors = (color) => {
    changeTheme(color); // Cambiar el tema con el color seleccionado
    setOpenPaletteMenu(false); // Cerrar el menú de colores después de seleccionar un color
  };

  const ActionButton = ({ icon, onClick, className = "" }) => (
    <button onClick={onClick} className={`action-button ${className}`}>
      {icon}
    </button>
  );

  // Apply theme color to CSS variables
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", themeColor);
  }, [themeColor]);

  return (
    <div
      className="container-navbar"
      style={{
        borderColor: themeColor,
        boxShadow: `0 2px 8px ${themeColor}40`,
      }}
    >
      <nav className="navbar px-4 py-2">
        <div className="navbar-container">
          <div className="navbar-row">
            {/* Logo */}
            <div className="navbar-brand">
              <img
                src="/icono-perfil.jpg"
                alt="Profile"
                className="rounded-circle"
                width="100"
                height="100"
                onClick={() => navigate("/home")}
              />
              {/* Desktop Links */}
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

            {/* Search */}
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

            {/* Mobile Actions */}
            <div className="mobile-actions">
              <ActionButton
                icon={<Globe2 size={22} />}
                onClick={toggleLanguageMenu}
                className="language-button"
              />
              {openLanguageMenu && (
                <div className="language-menu">
                  <button onClick={() => handleLanguageChange("es")}>
                    <span>🇪🇸</span>
                  </button>
                  <button onClick={() => handleLanguageChange("en")}>
                    <span>🇺🇸</span>
                  </button>
                  <button onClick={() => handleLanguageChange("pt")}>
                    <span>🇧🇷</span>
                  </button>
                </div>
              )}
              <ActionButton
                icon={<Palette size={20} />}
                onClick={togglePaletteMenu}
                className="palette-button"
              />
              {openPaletteMenu && (
                <div className="palette-menu">
                  <button
                    className="palette-color"
                    style={{
                      backgroundColor: "#f44336",
                      border:
                        themeColor === "#f44336" ? "2px solid white" : "none",
                    }}
                    onClick={() => handlePaletaColors("#f44336")}
                  ></button>
                  <button
                    className="palette-color"
                    style={{
                      backgroundColor: "#2196f3",
                      border:
                        themeColor === "#2196f3" ? "2px solid white" : "none",
                    }}
                    onClick={() => handlePaletaColors("#2196f3")}
                  ></button>
                  <button
                    className="palette-color"
                    style={{
                      backgroundColor: "#4caf50",
                      border:
                        themeColor === "#4caf50" ? "2px solid white" : "none",
                    }}
                    onClick={() => handlePaletaColors("#4caf50")}
                  ></button>
                  <button
                    className="palette-color"
                    style={{
                      backgroundColor: "#ffeb3b",
                      border:
                        themeColor === "#ffeb3b" ? "2px solid white" : "none",
                    }}
                    onClick={() => handlePaletaColors("#ffeb3b")}
                  ></button>
                </div>
              )}
              <ActionButton
                icon={<Search size={20} />}
                onClick={() => setIsSearchOpen((prev) => !prev)}
              />
              <button onClick={toggleMobileMenu} className="menu-button">
                <Menu size={24} />
              </button>
            </div>

            {/* Desktop Actions */}
            <div className="desktop-actions">
              <ActionButton
                icon={<Globe2 size={22} />}
                onClick={toggleLanguageMenu}
                className="language-button"
              />
              {openLanguageMenu && (
                <div className="language-menu">
                  <button onClick={() => handleLanguageChange("es")}>
                    <span>🇪🇸</span>
                  </button>
                  <button onClick={() => handleLanguageChange("en")}>
                    <span>🇺🇸</span>
                  </button>
                  <button onClick={() => handleLanguageChange("pt")}>
                    <span>🇧🇷</span>
                  </button>
                </div>
              )}
              <ActionButton
                icon={<Palette size={22} />}
                onClick={togglePaletteMenu}
                className="palette-button"
              />
              {openPaletteMenu && (
                <div className="palette-menu">
                  <button
                    className="palette-color"
                    style={{
                      backgroundColor: "#f44336",
                      border:
                        themeColor === "#f44336" ? "2px solid white" : "none",
                    }}
                    onClick={() => {
                      handlePaletaColors("#f44336"); // Cerrar el menú después de seleccionar el color
                    }}
                  ></button>
                  <button
                    className="palette-color"
                    style={{
                      backgroundColor: "#2196f3",
                      border:
                        themeColor === "#2196f3" ? "2px solid white" : "none",
                    }}
                    onClick={() => {
                      handlePaletaColors("#2196f3");
                    }}
                  ></button>
                  <button
                    className="palette-color"
                    style={{
                      backgroundColor: "#4caf50",
                      border:
                        themeColor === "#4caf50" ? "2px solid white" : "none",
                    }}
                    onClick={() => {
                      handlePaletaColors("#4caf50");
                    }}
                  ></button>
                  <button
                    className="palette-color"
                    style={{
                      backgroundColor: "#ffeb3b",
                      border:
                        themeColor === "#ffeb3b" ? "2px solid white" : "none",
                    }}
                    onClick={() => {
                      handlePaletaColors("#ffeb3b");
                    }}
                  ></button>
                </div>
              )}

              <button className="logout-button" onClick={handleLogaut}>
                <LogOut size={22} />
              </button>
            </div>
          </div>

          {/* Mobile Expanded Search */}
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

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <div className="mobile-menu-content">
                <Link to="/marvel" className="mobile-nav-link">
                  Marvel
                </Link>
                <Link to="/dc" className="mobile-nav-link">
                  DC
                </Link>
                <Link to="/favorites" className="mobile-nav-link">
                  {t("favorites")}
                </Link>
                <div className="mobile-logout">
                  <button
                    className="mobile-logout-button"
                    onClick={handleLogautNavBar}
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
