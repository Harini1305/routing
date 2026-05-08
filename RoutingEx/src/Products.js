import { Link } from "react-router-dom";

const Products = () => {
  let items = [
    { code: 101, price: 200, qty: 20 },

    { code: 102, price: 500, qty: 10 },

    { code: 103, price: 900, qty: 50 },
  ];

  return (
    <div className="productContainer">
      {items.map((i) => (
        <div className="card">
          <Link to={`/product/${i.code}/${i.price}/${i.qty}`}>
            <h2>Product {i.code}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
