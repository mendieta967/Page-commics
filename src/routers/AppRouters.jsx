import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../page/auth/login/Login";
import HomePage from "../page/heroes/homepage/HomePage";
import DcPage from "../page/heroes/dcPage/DcPage";
import MarvelPage from "../page/heroes/marvelPage/MarvelPage";
import { HeroScreen } from "../page/heroes/heroScreem/HeroScreen";
import NavBar from "../components/NavBar";
import ProtectedRouter from "../utils/ProtectedRouter";
import NotFound from "../page/notFound/NotFound";
import Register from "../page/auth/register/Register";
import Landingpage from "../page/landing/LandingPage";
import LandingNavBar from "../components/LandingNavBar";
import FavoritosPage from "../page/heroes/favoritos/FavoritosPage";

const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <ProtectedRouter>
        <NavBar />
        <HomePage />
      </ProtectedRouter>
    ),
  },
  {
    path: "/dc",
    element: (
      <ProtectedRouter>
        <NavBar />
        <DcPage />
      </ProtectedRouter>
    ),
  },
  {
    path: "/favorites",
    element: (
      <ProtectedRouter>
        <NavBar />
        <FavoritosPage />
      </ProtectedRouter>
    ),
  },
  {
    path: "/marvel",
    element: (
      <ProtectedRouter>
        <NavBar />
        <MarvelPage />
      </ProtectedRouter>
    ),
  },
  {
    path: "/hero/:heroeId", // Nueva ruta para detalles de héroes
    element: (
      <ProtectedRouter>
        <NavBar />
        <HeroScreen />
      </ProtectedRouter>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <>
        <LandingNavBar />
        <Landingpage />
      </>
    ),
  },
  {
    path: "/registerUser",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const AppRouters = () => {
  return <RouterProvider router={router} />;
};

export default AppRouters;
