import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [imagePreview, setImagePreview] = useState(0)

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
      <button className="bg-neutral-950 text-neutral-50 w-full hover:bg-neutral-700 transition-colors  fixed top-full transform -translate-y-full h-20 ">
        Add to cart
      </button>
      <div
        key={product._id}
        className="w-full flex flex-col  justify-center items-center  py-20  "
      >
        <h1 className="text-xl font-bold uppercase py-6">T-shirt simple</h1>
        <img
          src={`http://77.37.122.120:3001/${product.imageUrl[imagePreview]}`}
          alt=""
          className="h-full w-full order-1   "
        />
      
      <div className="order-2 flex justify-center items-center flex-col">
        <div className="flex w-full">
          {product.imageUrl.map((image, index) => (
            
              <img key={image} src={`http://77.37.122.120:3001/${image}`} alt="" className="w-2/6 p-3" onMouseEnter={() => {
                setImagePreview(index)
              }} />
            
            
          ))}
          </div>
          <p className="text-xl font-bold py-4">{product.price}€</p>
          <p className="text-sm font-semibold px-10 py-8">
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
