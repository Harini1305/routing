import { useParams } from "react-router-dom";

const Product = () => {
  let p = useParams();

  return (
    <div className="resultBox">
      <h1>Product Details</h1>

      <h2>ID : {p.id}</h2>

      <h2>Price : {p.price}</h2>

      <h2>Quantity : {p.qty}</h2>
    </div>
  );
};

export default Product;
