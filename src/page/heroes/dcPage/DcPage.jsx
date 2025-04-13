import HeroList from "../../../components/hero/HeroLink";

const DcPage = () => {
  return (
    <div className="Container-DcScreen">
      <h1>DCScreen</h1>
      <hr />
      <HeroList publisher="DC Comics" limit={100} />
    </div>
  );
};

export default DcPage;
