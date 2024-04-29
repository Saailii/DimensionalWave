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
    <div className="h-screen w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-16 ">
      {products.map((product) => (
        <div
          key={product._id}
          className="flex flex-col justify-center items-start px-2 md:justify-center md:items-start   py-6 "
        >
          <Link
            to={`/${product._id}`}
            className=" flex justify-start items-start size-full "
          >
            <img
              src={`http://77.37.122.120:3001/${product.imageUrl[0]}`}
              className="w-full rounded-md md:h-4/6"
            />
          </Link>
          <h1 className="uppercase font-sans text-md text-xl">
            T-Shirt Rose Matière bien
          </h1>
          <h2 className="  font-mono text-xl">{product.price}€</h2>
        </div>
      ))}
    </div>
  );
};

export default Products;
