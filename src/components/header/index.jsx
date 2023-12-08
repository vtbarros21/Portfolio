import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import s from "./style.module.sass";
import Sidebar from "../sidebar/sidebar";
import NavbarDesktop from "../navbar/NavbarDesktop";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={s.header}>
      <figure>
        <img src={Logo} alt="logo marca" className={s.logo} />
      </figure>
      {isMobile ? <Sidebar /> : <NavbarDesktop />}
    </header>
  );
};

export default Header;
