import useCatQuery from "../../queries/useCatQuery";

const Home = () => {
  const catQuery = useCatQuery();

  if (!catQuery) return null;

  if (catQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (catQuery.error) {
    return <div>error!</div>;
  }

  console.log("log", catQuery.data);

  return (
    <div>
      <div>Home ja</div>
      <img src={catQuery.data} />
    </div>
  );
};

export default Home;
