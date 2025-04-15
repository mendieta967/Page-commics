import { useEffect, useState } from "react";
import getHeroes from "../../../service/getHeroes";
import HeroCard from "../../../components/hero/HeroCard";
import "./HomePage.css";

const HomePage = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroes = async () => {
      const allHeroes = await getHeroes();
      console.log("Héroes cargados:", allHeroes); // 👈 esto debería mostrar un array de héroes
      setHeroes(allHeroes);
      setLoading(false);
    };

    fetchHeroes();
  }, []);

  return (
    <div className="container-home mt-3">
      <h1 className="text-center">Universo Cómics</h1>
      <hr />
      {loading ? (
        <p className="text-center">Cargando héroes...</p>
      ) : (
        <div className="grid-heroes">
          {heroes.map((hero) => (
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
