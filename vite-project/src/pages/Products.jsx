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
      <Products />
    </div>
  );
};

export default NewPage;
