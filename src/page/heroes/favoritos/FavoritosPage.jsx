import { useFavorites } from "../../../context/FavoritesContext";
import HeroCard from "../../../components/hero/HeroCard";
import { useSearch } from "../../../context/SearchContext";
import { useTranslation } from "react-i18next";
import "./FavoritosPage.css";

const FavoritosPage = () => {
  const { favorites } = useFavorites();
  const { search } = useSearch();
  const { t } = useTranslation();

  if (favorites.length === 0) {
    return (
      <div className="empty-state-container">
        <p className="alert alert-danger text-center">
          {t("noFavoritesFound")}
        </p>
      </div>
    );
  }

  const filteredHeroes = favorites.filter((hero) =>
    hero.name.toLowerCase().includes(search.toLowerCase())
  );

  if (filteredHeroes.length === 0) {
    return (
      <div className="empty-state-container">
        <p className="alert alert-danger text-center">{t("noHeroesFound")}</p>
      </div>
    );
  }

  return (
    <div className="container-favoritos mt-3">
      <h1 className="text-center">{t("myFavorites")}</h1>
      <hr />
      <div className="grid-heroes-favoritos">
        {filteredHeroes.map((hero) => (
          <div key={hero.id} className="contenedor-card-favorites mb-4">
            <HeroCard {...hero} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritosPage;
