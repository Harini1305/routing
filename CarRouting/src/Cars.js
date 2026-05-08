import { useEffect, useState } from "react";

import AddCar from "./AddCar";

import SearchCar from "./SearchCar";

import UpdateCar from "./UpdateCar";

import RemoveCar from "./RemoveCar";

const Cars = () => {
  let [cars, setCars] = useState([]);

  let [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    fetch("https://myfakeapi.com/api/cars/")
      .then((res) => res.json())
      .then((data) => {
        setCars(data.cars);

        setFilteredCars(data.cars);
      });
  }, []);

  const addCar = (car) => {
    let updated = [car, ...cars];

    setCars(updated);

    setFilteredCars(updated);
  };

  const searchCar = (text) => {
    let filtered = cars.filter((c) =>
      c.car.toLowerCase().includes(text.toLowerCase()),
    );

    setFilteredCars(filtered);
  };

  const removeCar = (id) => {
    let updated = cars.filter((c) => c.id !== id);

    setCars(updated);

    setFilteredCars(updated);
  };

  const updateCar = (id) => {
    let newPrice = prompt("Enter New Price");

    let updated = cars.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          price: newPrice,
        };
      }

      return c;
    });

    setCars(updated);

    setFilteredCars(updated);
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

            <UpdateCar id={c.id} updateCar={updateCar} />

            <RemoveCar id={c.id} removeCar={removeCar} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cars;
