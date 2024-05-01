import Nav from "../components/Nav";

import Products from "../components/Products";

const NewPage = () => {
  return (
    <div>
      <Nav />
      <div className="py-16 max-md:hidden "></div>
      <Products />
    </div>
  );
};

export default NewPage;
