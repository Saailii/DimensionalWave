import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://77.37.122.120:3001/product", {
      method: "GET",
    })
      .then((response) => {
        // Return parsed JSON data
        return response.json();
      })
      .then((data) => {
        // Set products state
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []); // Add empty dependency array to run effect only once

  return (
    <div className="h-screen w-full flex justify-center items-center">
      {products.map((product) => (
        <div
          key={product._id}
          className="flex flex-col justify-center items-center w-full"
        >
          <Link
            to={`/${product._id}`}
            className=" flex justify-center items-center "
          >
            <img
              src={`http://77.37.122.120:3001/${product.imageUrl[0]}`}
              alt=""
              className="size-3/5 relative rounded-md"
            />
          </Link>
          <h1 className="uppercase font-mono font-semibold">
            T-Shirt Rose Matière bien
          </h1>
          <h2 className="font-semibold font-mono">{product.price}€</h2>
        </div>
      ))}
    </div>
  );
};

export default Products;
