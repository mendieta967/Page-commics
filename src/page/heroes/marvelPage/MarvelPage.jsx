import HeroList from "../../../components/hero/HeroLink";
const MarvelPage = () => {
  return (
    <div>
      <h1>MarvelScreen</h1>
      <hr />

      <HeroList publisher="Marvel Comics" limit={100} />
    </div>
  );
};

export default MarvelPage;
