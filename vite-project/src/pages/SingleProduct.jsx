import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  useEffect(() => {
    fetch(`http://77.37.122.120:3001/product/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Nav />
      <button className="bg-neutral-950 text-neutral-50 w-full   fixed top-full transform -translate-y-full h-20 ">
        Add to cart
      </button>
      <div
        key={product._id}
        className="h-screen w-full flex flex-col  justify-center items-center  py-16 "
      >
        <h1 className="text-xl font-bold uppercase">{product.name}</h1>
        <img
          src={`http://77.37.122.120:3001/${product.imageUrl[0]}`}
          alt=""
          className="size-3/4 order-1 rounded-md "
        />
        <div className="order-2 flex justify-center items-center flex-col">
          <p className="text-xl font-bold py-2">{product.price}€</p>
          <p className="text-md font-semibold px-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            consequuntur corporis maiores perspiciatis tenetur perferendis rem
            beatae suscipit tempore fugiat dicta dignissimos cumque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
