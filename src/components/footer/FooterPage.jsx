import "./FooterPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const FooterPage = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; Pedro Olortegui Mendieta. Todos los derechos reservados.</p>
        <p>
          Datos obtenidos gracias a{" "}
          <a
            href="https://superheroapi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            SuperHero API
          </a>
        </p>

        <div className="footer-socials">
          <a
            href="https://www.instagram.com/mendieta967/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-olortegui-mendieta/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/mendieta967"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
