import { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../context/ThemeContext";
import { useContext } from "react";
import "./HeroScreen.css";
import getHeroes from "../../../service/getHeroes";

export const HeroScreen = () => {
  const { heroeId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { themeColor } = useContext(ThemeContext);

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

  if (loading) return <p>{t("loadingHeroes")}</p>;
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
            <h1 className="hero-title" style={{ color: themeColor }}>
              {name}
            </h1>
            <hr />
            <div className="info-grid">
              <div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b style={{ color: themeColor }}>{t("fullName")}:</b> {name}
                  </li>
                  <li className="list-group-item">
                    <b style={{ color: themeColor }}>{t("publisher")}:</b>{" "}
                    {biography.publisher}
                  </li>
                  <li className="list-group-item">
                    <b style={{ color: themeColor }}>{t("firstAppearance")}:</b>{" "}
                    {biography.firstAppearance}
                  </li>
                  <li className="list-group-item">
                    <b style={{ color: themeColor }}>{"placeOfBirth"}:</b>{" "}
                    {biography.placeOfBirth}
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="list-group-item">
                    <b style={{ color: themeColor }}>{t("alignment")}:</b>{" "}
                    {biography.alignment}
                  </li>
                  <li className="list-group-item">
                    <b style={{ color: themeColor }}>{t("height")}:</b>{" "}
                    {appearance.height?.join(" / ")}
                  </li>
                  <li className="list-group-item">
                    <b style={{ color: themeColor }}>{t("weight")}:</b>{" "}
                    {appearance.weight?.join(" / ")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="power-stats">
          <h2 style={{ color: themeColor }}>{t("powerStats")}</h2>
          <div className="container-status">
            <div className="skill-item-one">
              <div className="skill-item">
                <div className="skill-header">
                  <h5>{t("combat")}</h5>
                  <span className="skill-percentage">{powerstats.combat}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${powerstats.combat}%`,
                      backgroundColor: themeColor,
                    }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <h5>{t("durability")}</h5>
                  <span className="skill-percentage">
                    {powerstats.durability}%
                  </span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${powerstats.durability}%`,
                      backgroundColor: themeColor,
                    }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <h5>{t("intelligence")}</h5>
                  <span className="skill-percentage">
                    {powerstats.intelligence}%
                  </span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${powerstats.intelligence}%`,
                      backgroundColor: themeColor,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="skill-item-one ">
              <div className="skill-item">
                <div className="skill-header">
                  <h5>{t("power")}</h5>
                  <span className="skill-percentage">{powerstats.power}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${powerstats.power}%`,
                      backgroundColor: themeColor,
                    }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <h5>{t("speed")}</h5>
                  <span className="skill-percentage">{powerstats.speed}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${powerstats.speed}%`,
                      backgroundColor: themeColor,
                    }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <h5>{t("Strength")}</h5>
                  <span className="skill-percentage">
                    {powerstats.strength}%
                  </span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${powerstats.strength}%`,
                      backgroundColor: themeColor,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            className="btn-regresar"
            onClick={handleReturn}
            style={{ backgroundColor: themeColor, color: "black" }}
          >
            {t("back")}
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
