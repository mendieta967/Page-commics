import { useEffect, useState } from "react";
import { getHeroesByPublisher } from "../../service/getHeroesByPublisher";
import HeroCard from "./HeroCard";
import "./HeroLink.css";

const HeroList = ({ publisher, limit = 230 }) => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="grid-heroes-marvel">
      {heroes.map((hero) => (
        <div key={hero.id} className="contenedor-card-marvel mb-4">
          <HeroCard key={hero.id} {...hero} />
        </div>
      ))}
    </div>
  );
};

export default HeroList;
