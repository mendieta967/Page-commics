import { useEffect, useState } from "react";
import { useSearch } from "../../../context/SearchContext";
import getHeroes from "../../../service/getHeroes";
import HeroCard from "../../../components/hero/HeroCard";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../context/ThemeContext";
import { useContext } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  const { search } = useSearch();
  const { t } = useTranslation();
  const { themeColor } = useContext(ThemeContext); // Aquí accedes al color del tema

  useEffect(() => {
    const fetchHeroes = async () => {
      const allHeroes = await getHeroes();
      console.log("Héroes cargados:", allHeroes); // 👈 esto debería mostrar un array de héroes
      setHeroes(allHeroes);
      setLoading(false);
    };

    fetchHeroes();
  }, []);

  const filteredHeroes = heroes.filter((hero) =>
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
    <div className="container-home mt-3">
      <h1
        className="text-center"
        style={{
          color: themeColor,
        }}
      >
        {t("comicsUniverse")}
      </h1>
      <hr />
      {loading ? (
        <p
          className="text-center"
          style={{
            Color: themeColor,
          }}
        >
          {t("loadingHeroes")}
        </p>
      ) : (
        <div className="grid-heroes">
          {filteredHeroes.map((hero) => (
            <div key={hero.id} className="contendor-card mb-4">
              <HeroCard {...hero} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
