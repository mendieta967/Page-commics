import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const LandingNavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbarpage px-4 py-2">
      <div className="container-fluid-page d-flex align-items-center justify-content-between">
        <img
          src="/icono-perfil.jpg"
          alt="icon"
          className="rounded-circle"
          width="100"
          height="100"
        />

        <div className="d-flex gap-2">
          <button
            className="my-btn-page my-btn-secondary px-4"
            onClick={() => navigate("/login")}
            type="button"
          >
            Iniciar sesión
          </button>

          <button
            className="my-btn-page my-btn-primary px-4"
            onClick={() => navigate("/RegisterUser")}
          >
            Registrarse
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavBar;
