import { useParams } from "react-router-dom";

const CarDetails = () => {
  let p = useParams();

  return (
    <div className="resultBox">
      <h1>Car Details</h1>

      <h2>Car ID : {p.id}</h2>
    </div>
  );
};

export default CarDetails;
