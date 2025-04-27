import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./i18n.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthContextProvider>
        <SearchProvider>
          <FavoritesProvider>
            <App />
          </FavoritesProvider>
        </SearchProvider>
      </AuthContextProvider>
    </ThemeProvider>
  </StrictMode>
);
