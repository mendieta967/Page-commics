import HeroList from "../../../components/hero/HeroLink";
import { useTranslation } from "react-i18next";
import "./MarvelPage.css";
const MarvelPage = () => {
  const { t } = useTranslation();
  return (
    <div className="container-marvel mt-3">
      <h1>{t("marvelTitle")}</h1>
      <hr />
      <HeroList publisher="Marvel Comics" limit={100} />
    </div>
  );
};

export default MarvelPage;
