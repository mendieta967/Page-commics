import { getAllHeroes } from "../data/heroApi";
export const getHeroesByName = async (name = "") => {
  console.log("getHeroesByName called:", name);

  if (name.trim().length === 0) {
    return [];
  }

  try {
    const allHeroes = await getAllHeroes(); // trae todos
    const lowerName = name.toLowerCase();

    const filtered = allHeroes.filter((hero) =>
      hero.name.toLowerCase().includes(lowerName)
    );

    return filtered;
  } catch (error) {
    console.error("Error al buscar héroes por nombre:", error);
    return [];
  }
};
