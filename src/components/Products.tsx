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
    <div className="grid h-screen w-full grid-cols-2 py-16 sm:grid-cols-2 md:grid-cols-3 ">
      {products.map((product) => (
        <div
          key={product._id}
          className="flex flex-col items-start justify-center px-2 py-6 md:items-start   md:justify-center "
        >
          <Link
            to={`/${product._id}`}
            className=" flex size-full items-start justify-start "
          >
            <img
              src={`http://77.37.122.120:3001/${product.imageUrl[0]}`}
              className="w-full rounded-md md:h-4/6"
            />
          </Link>
          <h1 className="font-sans text-xl uppercase">
            T-Shirt Rose Matière bien
          </h1>
          <h2 className="  font-mono text-xl">{product.price}€</h2>
        </div>
      ))}
    </div>
  );
};

export default Products;
