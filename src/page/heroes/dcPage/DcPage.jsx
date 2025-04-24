import HeroList from "../../../components/hero/HeroLink";
import "./DcPage.css";

const DcPage = () => {
  return (
    <div className="Container-DcScreen mt-3">
      <h1>DCScreen</h1>
      <hr />
      <HeroList publisher="DC Comics" limit={100} />
    </div>
  );
};

export default DcPage;
