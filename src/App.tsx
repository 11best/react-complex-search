import SearchInput from "./component/SearchInput";

// receive filter CaseStatus
// case-caseStatus-$eq=completed

function App() {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="mt-16">
        <SearchInput />
      </div>
    </div>
  );
}

export default App;
