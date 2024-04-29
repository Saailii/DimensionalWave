import { useState } from "react";
import HamburgerMenu from "../assets/HamburgerMenu.svg";
import Logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";
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
        className={`flex   justify-center items-center fixed  bg-white w-full h-16 transition-shadow z-10 md:hidden ${
          scrolledFromY ? "shadow-md " : " "
        } `}
      >
        <img
          src={HamburgerMenu}
          alt=""
          onClick={handleClickNav}
          className="size-8 absolute top-4 left-2"
        />
        <Link to={"/"} className="order-1">
          <img src={Logo} alt="" className="size-16 order-1 " />
        </Link>
        <ul
          className={`bg-white absolute top-0 left-0 h-48 w-full  mt-16 flex flex-col justify-center items-start gap-2 px-4 shadow-md  ${
            isHiddenNav ? "hidden" : " "
          }`}
        >
          <Link to={"/NewPage"} className="cursor-pointer text-lg ">
            <li className="text-md    ">Products</li>
          </Link>

          <li className="text-md ">Menu</li>
          <li className="text-md">Contact</li>
        </ul>
        <img
          src={userLogo}
          alt=""
          className=" absolute top-4 right-3 size-8 "
        />
        <div className="absolute top-16 bg-red-500 w-full h-28 hidden">
          <div>Se connecter</div>
          <div>S'enrengistrer</div>
        </div>
      </nav>
      <nav
        className={`flex fixed w-full h-16 max-md:hidden transition-shadow z-10 ${
          scrolledFromY ? " shadow-md" : " "
        }`}
      >
        <ul className="flex w-full bg-white justify-center  items-center space  gap-60  ">
          <Link to={"/"} className="order-2 ">
            <img src={Logo} alt="" className="size-16   " />
          </Link>
          <Link to={"/NewPage"} className="cursor-pointer order-1 ">
            <li className="text-md font-semibold font-sans ">Products</li>
          </Link>

          <li className="text-md font-semibold font-sans order-3">Tarifs</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
