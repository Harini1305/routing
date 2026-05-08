const UpdateCar = ({ id, updateCar }) => {
  return <button onClick={() => updateCar(id)}>Update</button>;
};

export default UpdateCar;
