const RemoveCar = ({ id, removeCar }) => {
  return <button onClick={() => removeCar(id)}>Remove</button>;
};

export default RemoveCar;
