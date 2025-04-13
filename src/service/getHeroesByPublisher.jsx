import { getAllHeroes } from "../data/heroApi";

export const getHeroesByPublisher = async (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics", "Dark Horse Comics"];
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  try {
    const allHeroes = await getAllHeroes(); // trae todos
    const filtered = allHeroes.filter(
      (hero) => hero.biography?.publisher === publisher
    );

    return filtered;
  } catch (error) {
    console.error("Error al obtener héroes por publisher:", error);
    return [];
  }
};
