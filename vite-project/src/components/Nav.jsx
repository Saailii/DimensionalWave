import { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../assets/HamburgerMenu.svg";
import Logo from "../assets/Logo.jpg";
import userLogo from "../assets/user-stroke-rounded.svg";

const Nav = () => {
  const [isHiddenNav, setIsHiddenNav] = useState(true);
  const [scrolledFromY, setScrolledFromY] = useState(false);
  const [isHiddenLogin, setIsHiddenLogin] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setScrolledFromY(true);
    } else {
      setScrolledFromY(false);
    }
  });

  const handleClickNav = () => {
    setIsHiddenNav(!isHiddenNav);
  };

  const handleClickLogin = () => {
    setIsHiddenLogin(!isHiddenLogin);
  };
  return (
    <div>
      <nav
        className={`fixed   z-10 flex h-16  w-full items-center justify-center bg-white transition-shadow md:hidden ${
          scrolledFromY ? "shadow-md " : " "
        } `}
      >
        <img
          src={HamburgerMenu}
          alt=""
          onClick={handleClickNav}
          className="absolute left-2 top-4 size-8"
        />
        <Link to={"/"} className="order-1">
          <img src={Logo} alt="" className="order-1 size-16 " />
        </Link>
        <ul
          className={`absolute left-0 top-0 mt-16 flex h-48  w-full flex-col items-start justify-center gap-2 bg-white px-4 shadow-md  ${
            isHiddenNav ? "hidden" : " "
          }`}
        >
          <Link to={"/NewPage"} className="cursor-pointer text-lg ">
            <li className="text-xl       ">Intemporel</li>
          </Link>

          <li className="text-xl">Drop</li>
          <li className="text-xl ">Contact</li>
          
        </ul>
        <img
          src={userLogo}
          alt=""
          className=" absolute right-3 top-4 size-8 "
        />
        <div className="absolute top-16 hidden h-28 w-full bg-red-500">
          <div>Se connecter</div>
          <div>S'enrengistrer</div>
        </div>
      </nav>
      <nav
        className={`fixed z-10 flex h-16 w-full transition-shadow max-md:hidden ${
          scrolledFromY ? " shadow-md" : " "
        }`}
      >
        <ul className=" flex w-full items-center  justify-between px-6  bg-white  ">
          <Link to={"/"} className="order-2 ">
            <img src={Logo} alt="" className="size-16   " />
          </Link>
          <Link to={"/NewPage"} className="order-1 cursor-pointer ">
            <li className="font-sans text-xl font-semibold ">Products</li>
          </Link>

          <li className="order-3 font-sans text-xl font-semibold">Tarifs</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
