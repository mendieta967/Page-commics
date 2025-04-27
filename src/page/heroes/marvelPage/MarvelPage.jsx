import HeroList from "../../../components/hero/HeroLink";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../context/ThemeContext";
import { useContext } from "react";
import "./MarvelPage.css";
const MarvelPage = () => {
  const { t } = useTranslation();
  const { themeColor } = useContext(ThemeContext);
  return (
    <div className="container-marvel mt-3">
      <h1 style={{ color: themeColor }}>{t("marvelTitle")}</h1>
      <hr />
      <HeroList publisher="Marvel Comics" limit={100} />
    </div>
  );
};

export default MarvelPage;
