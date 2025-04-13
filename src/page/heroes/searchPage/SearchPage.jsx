import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UseForm } from "../../../hooks/UseForm";
import { getHeroesByName } from "../../../service/getHeroesByName";
import queryString from "query-string";
import HeroCard from "../../../components/hero/HeroCard";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = UseForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const [heroesFiltered, setHeroesFiltered] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔍 Buscar héroes cuando cambia el query param
  useEffect(() => {
    const fetchHeroes = async () => {
      if (q.trim() === "") {
        setHeroesFiltered([]);
        return;
      }

      setLoading(true);
      const results = await getHeroesByName(q);
      console.log("Resultados de búsqueda:", results); // <-- Añade esto
      setHeroesFiltered(results);
      setLoading(false);
    };

    fetchHeroes();
  }, [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Búsquedas</h1>
      <hr />

      <div className="container-form">
        <div className="search-form-container">
          <h4 className="search-title">Buscar</h4>
          <hr />
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Buscar un héroe"
              className="form-control search-input"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button className="btn btn-search" type="submit">
              Buscar...
            </button>
          </form>
        </div>
      </div>

      <hr />
      <h1>Resultados</h1>
      <hr />

      <div className="container-SearchScreen">
        <div className="search-results">
          {loading ? (
            <div className="alert alert-info custom-alert">
              Cargando resultados...
            </div>
          ) : q === "" ? (
            <div className="alert alert-info custom-alert">Buscar un héroe</div>
          ) : heroesFiltered.length === 0 ? (
            <div className="alert alert-danger custom-alert">
              No hay resultados para: <strong>{q}</strong>
            </div>
          ) : (
            heroesFiltered.map((hero) => <HeroCard key={hero.id} {...hero} />)
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
