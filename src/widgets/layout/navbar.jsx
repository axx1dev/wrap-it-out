import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { Link as LinkDom } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, animateScroll } from "react-scroll";
import "../styles/navbar.css";

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = useState(false);
  const [bgOpacityNavBar, setBGOpacityNavBar] = useState('bg-opacity-0')

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );

    window.addEventListener(
      "scroll",
      () => window.scrollY !== 0? setBGOpacityNavBar('bg-opacity-80 whiteShadowInlineMenu') : setBGOpacityNavBar('bg-opacity-0')
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target, id }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="white"
          className="capitalize font-permanent"
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-permanent"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </a>
          ) : (
            <Link 
              to={id}
              smooth={true}
              offset={0}
              duration={800}
              className="cursor-pointer"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <div className={`max-w-full container bg-black ${bgOpacityNavBar} fixed left-2/4 z-10 mx-auto -translate-x-2/4 text-center`}>
      <MTNavbar color="transparent" className="p-4 inline-block">
        <div className="container mx-auto flex items-center justify-between text-white">
          <LinkDom to="/">
            <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold font-permanent">
              {brandName}
            </Typography>
          </LinkDom>
          <div className="hidden lg:block">{navList}</div>
          <div className="hidden gap-2 lg:flex">
            <a
              href="https://www.material-tailwind.com/blocks?ref=mtkr"
              target="_blank"
            >
              <Button className="font-permanent" variant="text" size="sm" color="white" fullWidth>
                ESP
              </Button>
            </a>
            {React.cloneElement(action, {
              className: "hidden lg:inline-block",
            })}
          </div>
          <IconButton
            variant="text"
            size="sm"
            color="white"
            className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <MobileNav
          className="rounded-xl bg-black px-4 pt-2  text-blue-gray-200"
          open={openNav}
        >
          <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {navList}
            <li>
              <a
                href="#"
                target="_blank"
                className="mb-2 block"
              >
                <Button color="white" className="font-permanent" variant="text" size="sm" fullWidth>
                  ESP
                </Button>
              </a>
            </li>
            <li>
              {React.cloneElement(action, {
                className: "w-full block",
              })}
            </li>
          </ul>
        </MobileNav>
      </MTNavbar>
    </div>
  );
}

Navbar.defaultProps = {
  brandName: "Wrap It Out",
  action: (
    <Link 
      to="home"
      smooth={true}
      offset={80}
      duration={800}
    >
      <Button className="font-permanent" variant="text" size="sm" color="white" fullWidth>
        Theme Dark
      </Button>
    </Link>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
