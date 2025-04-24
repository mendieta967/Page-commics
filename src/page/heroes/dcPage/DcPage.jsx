import HeroList from "../../../components/hero/HeroLink";
import { useTranslation } from "react-i18next";
import "./DcPage.css";

const DcPage = () => {
  const { t } = useTranslation();
  return (
    <div className="Container-DcScreen mt-3">
      <h1>{t("dcSuperheroes")}</h1>
      <hr />
      <HeroList publisher="DC Comics" limit={100} />
    </div>
  );
};

export default DcPage;
