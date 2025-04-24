import HeroList from "../../../components/hero/HeroLink";
import "./MarvelPage.css";
const MarvelPage = () => {
  return (
    <div className="container-marvel mt-3">
      <h1>MarvelScreen</h1>
      <hr />
      <HeroList publisher="Marvel Comics" limit={100} />
    </div>
  );
};

export default MarvelPage;
