import { useState } from "react";

const RemoveCar = () => {
  let [id, setId] = useState("");

  const handleRemove = () => {
    let cars = JSON.parse(localStorage.getItem("cars")) || [];

    let updated = cars.filter((c) => c.id != id);

    localStorage.setItem("cars", JSON.stringify(updated));

    alert("Car Removed");
  };

  return (
    <div className="formBox">
      <h1>Remove Car</h1>

      <input
        type="number"
        placeholder="Enter Car ID"
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={handleRemove}>Remove Car</button>
    </div>
  );
};

export default RemoveCar;
