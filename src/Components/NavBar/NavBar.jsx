{/*import React from "react";
import Logo from "../Logo/Logo";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navbar-container">
      <Logo />
      <nav>
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" to={"/"}>Medicos</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to={"/category/neurocirugia"}>Especialidades</NavLink>
            <NavLink className="navbar-link" to={"/category/cardiologia"}>Especialidades</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to={"/contacts"}>Contactos</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );

  };
export default NavBar;*/}
import React from "react";
import Logo from "../Logo/Logo";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navbar-container">
     <Logo/>
      <nav>
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" to={"/"}>
              Medicos
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to={"/category/especialidades"}>
              Especialidades
            </NavLink>
            <ul className="subcategories">
              <li>
                <NavLink className="navbar-link" to={"/category/neurocirugia"}>
                  Neurocirugía
                </NavLink>
              </li>
              <li>
                <NavLink className="navbar-link" to={"/category/cardiologia"}>
                  Cardiología
                </NavLink>
              </li>
              <li>
                <NavLink className="navbar-link" to={"/category/otorrinolaringologia"}>
                  otorrinolaringologia
                </NavLink>
              </li>
              <li>
                <NavLink className="navbar-link" to={"/category/cirugiaPlastica"}>
                  cirugia Plastica
                </NavLink>
              </li>
          
            </ul>
          </li>
          <li>
            <NavLink className="navbar-link" to={"/contacts"}>
              Contactos
            </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;


 