import useCatQuery from "../queries/useCatQuery";

const GenerateCat = () => {
  const catQuery = useCatQuery();

  if (!catQuery) return null;

  if (catQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (catQuery.error) {
    return <div>error!</div>;
  }

  return (
    <div>
      <img src={catQuery.data} />
    </div>
  );
};

export default GenerateCat;