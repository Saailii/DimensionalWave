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
    <div className="h-screen w-full grid grid-cols-2 py-16">
      {products.map((product) => (
        <div
          key={product._id}
          className="flex flex-col justify-center items-start  px-2   "
        >
          <Link
            to={`/${product._id}`}
            className=" flex justify-start items-start "
          >
            <img
              src={`http://77.37.122.120:3001/${product.imageUrl[0]}`}
              alt=""
              className="w-full  relative rounded-md "
            />
          </Link>
          <h1 className="uppercase font-sans text-md">
            T-Shirt Rose Matière bien
          </h1>
          <h2 className="  font-mono">{product.price}€</h2>
        </div>
      ))}
    </div>
  );
};

export default Products;
