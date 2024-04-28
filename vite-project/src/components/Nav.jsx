import { useState } from "react";
import HamburgerMenu from "../assets/HamburgerMenu.svg";
import Logo from "../assets/Logo.jpg";

const Nav = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [scrolledFromY, setScrolledFromY] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setScrolledFromY(true);
    } else {
      setScrolledFromY(false);
    }
  });

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <nav
        className={`flex flex-col  justify-center items-center fixed  bg-white w-full h-16 transition-shadow  md:hidden ${
          scrolledFromY ? "shadow-md " : " "
        } `}
      >
        <img
          src={HamburgerMenu}
          alt=""
          onClick={handleClick}
          className="h-12 absolute top-2 left-0"
        />
        <img src={Logo} alt="" className="size-16 " />
        <ul
          className={`bg-neutral-100 absolute top-0 left-0 h-48 w-full  mt-16 flex flex-col justify-center items-start gap-2 px-4 ${
            isHidden ? "hidden" : " "
          }`}
        >
          <li className="text-lg">Accueil</li>
          <li className="text-lg ">Tarif</li>
          <li className="text-lg ">Menu</li>
          <li className="text-lg ">Contact</li>
        </ul>
      </nav>
      <nav
        className={`flex fixed w-full h-16 max-md:hidden transition-shadow ${
          scrolledFromY ? " shadow-md" : " "
        }`}
      >
        <ul className="flex w-full bg-white justify-center items-center gap-12 px-12 ">
          <img src={Logo} alt="" className="size-16 order-3" />
          <li className="text-2xl font-semibold font-sans order-1 ">Accueil</li>
          <li className="text-2xl font-semibold font-sans order-2 ">Menu</li>
          <li className="text-2xl font-semibold font-sans order-4">Tarifs</li>
          <li className="text-2xl font-semibold font-sans order-5">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
