import { useState } from "react";

const UpdateCar = () => {
  let [id, setId] = useState("");

  let [price, setPrice] = useState("");

  const handleUpdate = () => {
    let cars = JSON.parse(localStorage.getItem("cars")) || [];

    let updated = cars.map((c) => {
      if (c.id == id) {
        return {
          ...c,
          price: price,
        };
      }

      return c;
    });

    localStorage.setItem("cars", JSON.stringify(updated));

    alert("Car Updated");
  };

  return (
    <div className="formBox">
      <h1>Update Car</h1>

      <input
        type="number"
        placeholder="Enter Car ID"
        onChange={(e) => setId(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter New Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleUpdate}>Update Car</button>
    </div>
  );
};

export default UpdateCar;
