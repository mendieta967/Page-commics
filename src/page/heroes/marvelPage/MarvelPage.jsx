import HeroList from "../../../components/hero/HeroLink";
import "./MarvelPage.css";
const MarvelPage = () => {
  return (
    <div className="container-marvel">
      <h1>MarvelScreen</h1>
      <hr />
      <div className="contenedor-card mb-4">
        <HeroList publisher="Marvel Comics" limit={100} />
      </div>
    </div>
  );
};

export default MarvelPage;
