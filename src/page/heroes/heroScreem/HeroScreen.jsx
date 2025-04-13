import { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
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
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={images?.lg || "/assets/no-image.jpg"} // 👈 CAMBIADO
          alt={name}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{name}</h3>
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
          <li className="list-group-item">
            <b>Alineación: {biography.alignment}</b>
          </li>
          <li className="list-group-item">
            <b>Altura: {appearance.height?.join(" / ")}</b>
          </li>
          <li className="list-group-item">
            <b>Peso: {appearance.weight?.join(" / ")}</b>
          </li>
        </ul>
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>Estadísticas de Poder</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Inteligencia:</b> {powerstats.intelligence}
          </li>
          <li className="list-group-item">
            <b>Fuerza:</b> {powerstats.strength}
          </li>
          <li className="list-group-item">
            <b>Velocidad:</b> {powerstats.speed}
          </li>
          <li className="list-group-item">
            <b>Durabilidad:</b> {powerstats.durability}
          </li>
          <li className="list-group-item">
            <b>Poder:</b> {powerstats.power}
          </li>
          <li className="list-group-item">
            <b>Combate:</b> {powerstats.combat}
          </li>
        </ul>
        <button className="button btn-regresar" onClick={handleReturn}>
          Atrás
        </button>
      </div>
    </div>
  );
};
