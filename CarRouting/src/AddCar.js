import { useState } from "react";

const AddCar = ({ addCar }) => {
  let [brand, setBrand] = useState("");

  let [model, setModel] = useState("");

  let [price, setPrice] = useState("");

  const handleAdd = () => {
    let newCar = {
      id: Date.now(),

      car: brand,

      car_model: model,

      price: price,
    };

    addCar(newCar);

    setBrand("");

    setModel("");

    setPrice("");
  };

  return (
    <div className="formBox">
      <h1>Add Car</h1>

      <input
        type="text"
        placeholder="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />

      <input
        type="text"
        placeholder="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />

      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleAdd}>Add Car</button>
    </div>
  );
};

export default AddCar;
