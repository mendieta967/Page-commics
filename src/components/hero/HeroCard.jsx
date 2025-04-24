import { Link } from "react-router-dom";
import "./Hero.css";
import { useFavorites } from "../../context/FavoritesContext";
import { useTranslation } from "react-i18next";

const HeroCard = ({ id, name, images = {}, biography = {} }) => {
  const imagePath =
    images.lg || images.md || images.sm || "/assets/no-image.jpg";

  const { togleFavorite, isFavorite } = useFavorites();
  const { t } = useTranslation();
  const alreadyFavorite = isFavorite(id);

  const hero = { id, name, images, biography };

  return (
    <div className="card">
      <div className="card-img">
        <img src={imagePath} className="card-img-top" alt={name} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>
          <strong>{t("fullName")}:</strong> {biography.fullName}
        </p>
        <p>
          <strong>{t("publisher")}:</strong> {biography.firstAppearance}
        </p>
      </div>
      <div className="card-footer">
        <div className="footer-link">
          <Link to={`/hero/${id}`} className="btn btn-primary btn-sm ">
            {t("moreInfo")}
          </Link>
        </div>
        <div className="footer-button">
          <button
            onClick={() => togleFavorite(hero)}
            className={`btn-fav ${
              alreadyFavorite ? "is-favorite" : "not-favorite"
            }`}
            aria-label={
              alreadyFavorite ? t("removeFromFavorites") : t("addToFavorites")
            }
            title={
              alreadyFavorite ? t("removeFromFavorites") : t("addToFavorites")
            }
          >
            {alreadyFavorite ? "🗑️" : "❤️"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
