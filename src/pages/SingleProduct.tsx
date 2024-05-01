import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [imagePreview, setImagePreview] = useState(0);

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
      <button className="fixed top-full h-20 w-full -translate-y-full  bg-neutral-950 text-neutral-50 transition-colors hover:bg-neutral-700">
        Add to cart
      </button>
      <div
        key={product._id}
        className="flex w-full flex-col  items-center justify-center  py-20  "
      >
        <h1 className="py-6 text-xl font-bold uppercase">T-shirt simple</h1>
        <p className="py-4 text-xl font-bold">{product.price}€</p>
        <img
          src={`http://77.37.122.120:3001/${product.imageUrl[imagePreview]}`}
          alt=""
          className="order-1 size-full md:size-3/4  "
        />

        <div className="order-2 flex flex-col items-center justify-center">
          <div className="flex w-full">
            {product.imageUrl.map((image, index) => (
              <img
                key={image}
                src={`http://77.37.122.120:3001/${image}`}
                alt=""
                className="w-2/6 p-3 md:h-3/6"
                onMouseEnter={() => {
                  setImagePreview(index);
                }}
              />
            ))}
          </div>

          <p className="px-10 py-8 text-sm font-semibold">
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
