import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Estado para guardar el color del tema (por defecto, rojo)
  const [themeColor, setThemeColor] = useState("#f44336"); // Color inicial

  // Función para cambiar el color del tema
  const changeTheme = (color) => {
    setThemeColor(color);
    // Aquí podrías agregar lógica adicional, como guardar en localStorage
  };

  // Definir los estilos basados en el color seleccionado
  const themeStyles = {
    backgroundColor: themeColor, // Fondo con el color actual
    color: themeColor === "#ffffff" ? "#000000" : "#ffffff", // Contraste para el texto
  };

  return (
    <ThemeContext.Provider value={{ themeColor, changeTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
