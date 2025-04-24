import { useEffect, useState } from "react";
import { getHeroesByPublisher } from "../../service/getHeroesByPublisher";
import { useSearch } from "../../context/SearchContext";
import HeroCard from "./HeroCard";
import "./HeroLink.css";

const HeroList = ({ publisher, limit = 230 }) => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  const { search } = useSearch();

  useEffect(() => {
    const fetchHeroes = async () => {
      setLoading(true);
      try {
        const data = await getHeroesByPublisher(publisher, limit);
        setHeroes(data);
      } catch (error) {
        console.error("Error al cargar héroes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();
  }, [publisher, limit]);

  if (loading) return <p>Cargando héroes de {publisher}...</p>;

  const filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(search.toLowerCase())
  );

  if (filteredHeroes.length === 0) {
    return (
      <div className="empty-state-container">
        <p className="alert alert-danger text-center">
          No se encontraron héroes con ese nombre.
        </p>
      </div>
    );
  }

  return (
    <div className="grid-heroes-marvel">
      {filteredHeroes.map((hero) => (
        <div key={hero.id} className="contenedor-card-marvel mb-4">
          <HeroCard key={hero.id} {...hero} />
        </div>
      ))}
    </div>
  );
};

export default HeroList;
