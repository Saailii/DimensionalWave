import Nav from "../components/Nav";
import superHero from "../assets/bg-hero-banner-02.jpg";

const NewPage = () => {
  return (
    <div>
      <Nav />
      <div className="py-16 max-md:hidden ">
        <img src={superHero} alt="" className="w-full" />
      </div>
      <div className="max-md:absolute max-md:top-2/4 max-md:px-6">
        <h1 className="text-4xl">Titre SA</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,
          esse voluptas. Obcaecati hic dolorum quo.
        </p>
      </div>
    </div>
  );
};

export default NewPage;
