import { useEffect, useState } from "react";

import AddCar from "./AddCar";

import SearchCar from "./SearchCar";

const Cars = () => {
  let [cars, setCars] = useState([]);

  let [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    fetch("https://myfakeapi.com/api/cars/")
      .then((res) => res.json())
      .then((data) => {
        setCars(data.cars);

        setFilteredCars(data.cars);

        localStorage.setItem("cars", JSON.stringify(data.cars));
      });
  }, []);

  const addCar = (car) => {
    let updated = [car, ...filteredCars];

    setCars(updated);

    setFilteredCars(updated);

    localStorage.setItem("cars", JSON.stringify(updated));
  };

  const searchCar = (text) => {
    let filtered = cars.filter((c) =>
      c.car.toLowerCase().includes(text.toLowerCase()),
    );

    setFilteredCars(filtered);
  };

  return (
    <>
      <AddCar addCar={addCar} />

      <SearchCar searchCar={searchCar} />

      <div className="productContainer">
        {filteredCars.map((c) => (
          <div className="card">
            <h2>{c.car}</h2>

            <h3>{c.car_model}</h3>

            <h3>{c.price}</h3>

            <h3>ID : {c.id}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cars;
