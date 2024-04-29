import Nav from "../components/Nav";
import superHero from "../assets/bg-hero-banner-02.jpg";
import Products from "../components/Products";

const NewPage = () => {
  return (
    <div>
      <Nav />
      <div className="py-16 max-md:hidden ">
        <img src={superHero} alt="" className="w-full" />
      </div>
      <div className="max-md:absolute max-md:top-2/4 max-md:px-6">
        <Products />
      </div>
    </div>
  );
};

export default NewPage;
