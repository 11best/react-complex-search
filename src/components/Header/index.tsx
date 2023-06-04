const Header = () => {
  return (
    <header className="h-12 bg-red-300 flex justify-between items-center">
      <div className=" bg-yellow-200 w-20 h-12 flex items-center justify-center">
        Title
      </div>
      <div>
        <a href="" className="font-semibold hover:text-amber-500 mx-4">
          page 1
        </a>
        <a href="" className="font-semibold hover:text-amber-500 mx-4">
          page 2
        </a>
      </div>
    </header>
  );
};

export default Header;
