import { useState } from "react";
import HamburgerMenu from "../assets/HamburgerMenu.svg";
import Logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";
import NewPage from "../pages/newPage";

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
          className="size-8 absolute top-4 left-0"
        />
        <Link to={"/"} className="order-2">
          <img src={Logo} alt="" className="size-16 " />
        </Link>
        <ul
          className={`bg-neutral-50 absolute top-0 left-0 h-48 w-full  mt-16 flex flex-col justify-center items-start gap-2 px-4 shadow-md  ${
            isHidden ? "hidden" : " "
          }`}
        >
          <Link to={"/NewPage"} className="cursor-pointer text-lg">
            <li className="text-lg ">New Page</li>
          </Link>

          <li className="text-lg ">Menu</li>
          <li className="text-lg ">Contact</li>
        </ul>
      </nav>
      <nav
        className={`flex fixed w-full h-16 max-md:hidden transition-shadow ${
          scrolledFromY ? " shadow-md" : " "
        }`}
      >
        <ul className="flex w-full bg-white justify-center  items-center space  gap-60  gap-12 ">
          <Link to={"/"} className="order-2">
            <img src={Logo} alt="" className="size-16 " />
          </Link>
          <Link to={"/NewPage"} className="cursor-pointer order-1">
            <li className="text-xl font-semibold font-sans ">New Page</li>
          </Link>

          <li className="text-xl font-semibold font-sans order-3">Tarifs</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
