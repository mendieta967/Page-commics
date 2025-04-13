const API_BASE = "https://akabab.github.io/superhero-api/api/all.json";

export const getAllHeroes = async () => {
  const response = await fetch(`${API_BASE}`);
  const data = await response.json();
  return data;
};
