import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return storedFavorites;
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (hero) => {
    setFavorites((prevFavorites) => [...prevFavorites, hero]);
  };

  const removeFavorite = (heroId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((hero) => hero.id !== heroId)
    );
  };

  const isFavorite = (heroId) => favorites.some((fav) => fav.id === heroId);

  const togleFavorite = (hero) => {
    if (isFavorite(hero.id)) {
      removeFavorite(hero.id);
    } else {
      addFavorite(hero);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        togleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
