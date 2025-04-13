import { getAllHeroes } from "../data/heroApi";

const getHeroes = async () => {
  try {
    const heroes = await getAllHeroes();
    return heroes; // esto debe ser un array de héroes
  } catch (error) {
    console.error("Error al obtener todos los héroes", error);
    return [];
  }
};

export default getHeroes;
