import HeroList from "../../../components/hero/HeroLink";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../context/ThemeContext";
import { useContext } from "react";
import "./DcPage.css";

const DcPage = () => {
  const { t } = useTranslation();
  const { themeColor } = useContext(ThemeContext);
  return (
    <div className="Container-DcScreen mt-3">
      <h1 style={{ color: themeColor }}>{t("dcSuperheroes")}</h1>
      <hr />
      <HeroList publisher="DC Comics" limit={100} />
    </div>
  );
};

export default DcPage;
