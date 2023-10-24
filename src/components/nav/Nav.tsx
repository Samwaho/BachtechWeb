import { useState } from "react";
import logo from "../../assets/bachtechlogo.png";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import "./Nav.css";
import { Reveal } from "../../Reveal";
import { Link, links } from "../../data";
const NavComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <section id="navbar" className="container mt-3  ">
      <Reveal>
        <img src={logo} alt="logo" className="ms-lg-4" />
      </Reveal>
      <Reveal>
        <h3 className="ms-2 mt-2 text-gradient">BachTech Solutions</h3>
      </Reveal>
      <button className="menu-toggle ms-5" onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose /> : <HiMenuAlt2 />}
        {/* Use AiOutlineClose icon when the menu is open, HiMenuAlt2 icon when closed */}
      </button>
      <ul id="nav-items" className={`mx-auto ul ${isMenuOpen ? "active" : ""}`}>
        {links.map((link: Link) => {
          return (
            <Reveal key={link.id}>
              <li>
                <a href={link.href} onClick={toggleMenu}>
                  {link.text}
                </a>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
};

export default NavComponent;
