import { useNavigate } from "react-router-dom";
import FooterPage from "../../components/footer/FooterPage";
import "./LandingPage.css";

const Landingpage = () => {
  const navigate = useNavigate();
  return (
    <div className="container-landing">
      <section className="landing-section">
        <div className="landing-text">
          <h1>Universo Cómics</h1>
          <p>
            Un personaje de cómic puede ser un héroe, un villano o incluso algo
            intermedio. Cada uno tiene habilidades únicas, historias complejas y
            un lugar especial en el universo de la ficción.
            <br />
            <br />
            Con esa definición podríamos incluir a muchos personajes legendarios
            de los cómics, y no estamos aquí para hablar solo de los buenos.
          </p>
        </div>
        <div className="section-Galeria">
          <img src="/notFound2.jpeg" alt="" />
          <img src="/notFound.jpeg" alt="" />
          <img src="/unomas.jpeg" alt="" />
          <img src="/segudno.jpeg" alt="" />
          <img src="/tercero.jpeg" alt="" />
          <img src="/cuarto.jpeg" alt="" />
        </div>
      </section>
      <section className="about-section">
        <div className="about-content">
          <h2>¿De qué se trata esta app?</h2>
          <p>
            Esta plataforma está pensada para los fanáticos de los superhéroes y
            villanos. Podrás buscar, explorar y descubrir información detallada
            sobre tus personajes favoritos de los universos de DC, Marvel ¡y
            más!
          </p>
          <p>
            Nuestra app se conecta con la <strong>SuperHero API</strong> para
            ofrecer datos reales, imágenes, biografías, estadísticas de poder y
            mucho más.
          </p>

          <div className="cta-buttons">
            <p>¿Querés empezar a explorar?</p>
            <button className="btn-login" onClick={() => navigate("/login")}>
              Iniciar Sesión
            </button>
            <button
              className="btn-register"
              onClick={() => navigate("/RegisterUser")}
            >
              Registrarse
            </button>
          </div>
        </div>
      </section>
      <FooterPage />
    </div>
  );
};

export default Landingpage;
