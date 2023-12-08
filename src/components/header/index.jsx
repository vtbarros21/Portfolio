import React from "react";
import Logo from "../../assets/logo.png";
import s from "./style.module.sass";
import Sidebar from "../sidebar/sidebar";

const Header = () => {

  return (
    <header className={s.header}>
      <figure>
        <img src={Logo} alt="logo marca" className={s.logo} />
      </figure>
      <nav>
        <Sidebar />
        <ul className={s.ul}>
          <li>
            <a href="#" className={s.li}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className={s.li}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#" className={s.li}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#" className={s.li}>
              Serviços
            </a>
          </li>
          <li>
            <a href="#" className={s.li}>
              Skills
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
