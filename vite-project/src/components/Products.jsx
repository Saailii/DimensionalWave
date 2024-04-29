import { useEffect, useState } from "react";

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
    <div>
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col justify-center items-center "
        >
          <img
            src={`http://77.37.122.120:3001/${product.imageUrl[0]}`}
            alt=""
            className="size-4/5 relative"
          />
          <h1 className="uppercase font-mono font-semibold py-0">
            {product.name}
          </h1>
          <h2 className="font-semibold font-mono">{product.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default Products;
