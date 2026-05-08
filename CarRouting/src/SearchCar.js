const SearchCar = ({ searchCar }) => {
  return (
    <div className="formBox">
      <h1>Search Car</h1>

      <input
        type="text"
        placeholder="Search Brand"
        onChange={(e) => searchCar(e.target.value)}
      />
    </div>
  );
};

export default SearchCar;
