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
          className={`bg-white absolute top-0 left-0 h-screen w-3/4  mt-16 ${
            isHidden ? "hidden" : " "
          }`}
        >
          <li>Accueil</li>
          <li>Accueil</li>
        </ul>
      </nav>
      <nav
        className={`flex fixed w-full h-16 max-md:hidden transition-shadow ${
          scrolledFromY ? " shadow-md" : " "
        }`}
      >
        <ul className="flex w-full bg-white justify-center items-center gap-12 px-12 ">
          <img src={Logo} alt="" className="size-16 order-2" />
          <li className="text-2xl font-semibold font-mono order-1">Accueil</li>
          <li className="text-2xl font-semibold font-mono order-3">Menu</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
