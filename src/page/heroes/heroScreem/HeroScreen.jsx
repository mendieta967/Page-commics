import { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import "./HeroScreen.css";
import getHeroes from "../../../service/getHeroes";

export const HeroScreen = () => {
  const { heroeId } = useParams();
  const navigate = useNavigate();

  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const allHeroes = await getHeroes(); // Traés todos
        const foundHero = allHeroes.find(
          (h) => h.id.toString() === heroeId // Buscás por ID
        );
        setHero(foundHero);
      } catch (error) {
        console.error("Error al obtener el héroe:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, [heroeId]);

  const handleReturn = () => {
    navigate(-1);
  };

  if (loading) return <p>Cargando héroe...</p>;
  if (!hero) return <Navigate to="/" />;

  const { name, biography, images, appearance, powerstats } = hero;

  return (
    <div className="row hero-detail-container mt-5">
      <div className="hero-card">
        <div className="hero-grid">
          <div className="hero-image-container">
            <img
              src={images?.lg || "/assets/no-image.jpg"}
              alt={name}
              className="img-thumbnail hero-image animate__animated animate__fadeInLeft"
            />
          </div>

          <div className="hero-info">
            <h1 className="hero-title">{name}</h1>
            <hr />
            <div className="info-grid">
              <div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Nombre completo:</b> {name}
                  </li>
                  <li className="list-group-item">
                    <b>Editorial:</b> {biography.publisher}
                  </li>
                  <li className="list-group-item">
                    <b>Primera aparición:</b> {biography.firstAppearance}
                  </li>
                  <li className="list-group-item">
                    <b>Lugar de nacimiento:</b> {biography.placeOfBirth}
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="list-group-item">
                    <b>Alineación:</b> {biography.alignment}
                  </li>
                  <li className="list-group-item">
                    <b>Altura:</b> {appearance.height?.join(" / ")}
                  </li>
                  <li className="list-group-item">
                    <b>Peso:</b> {appearance.weight?.join(" / ")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="power-stats">
          <h2>Estadísticas de Poder</h2>
          <div className="container-status">
            <div className="skill-item-one">
              <div className="skill-item">
                <div className="skill-header">
                  <h5>Combate</h5>
                  <span className="skill-percentage">{powerstats.combat}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${powerstats.combat}%` }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <h5>Durabilidad</h5>
                  <span className="skill-percentage">
                    {powerstats.durability}%
                  </span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${powerstats.durability}%` }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <h5>Inteligencia</h5>
                  <span className="skill-percentage">
                    {powerstats.intelligence}%
                  </span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${powerstats.intelligence}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="skill-item-one ">
              <div className="skill-item">
                <div className="skill-header">
                  <h5>Poder</h5>
                  <span className="skill-percentage">{powerstats.power}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${powerstats.power}%` }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <h5>Velocidad</h5>
                  <span className="skill-percentage">{powerstats.speed}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${powerstats.speed}%` }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <h5>Strength</h5>
                  <span className="skill-percentage">
                    {powerstats.strength}%
                  </span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${powerstats.strength}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="btn-regresar" onClick={handleReturn}>
            ← Atrás
          </button>
        </div>
      </div>
    </div>
  );
};

/** <div> 
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Inteligencia:</b>
                </li>
                <li className="list-group-item">
                  <b>Fuerza:</b>
                </li>
                <li className="list-group-item">
                  <b>Velocidad:</b>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="list-group-item">
                  <b>Durabilidad:</b>
                </li>
                <li className="list-group-item">
                  <b>Poder:</b>
                </li>
                <li className="list-group-item">
                  <b>Combate:</b>
                </li>
              </ul>
            </div>            <div>
    
            </div>*/
