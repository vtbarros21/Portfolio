import React from "react";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div>
        <img src={Logo} alt="" />
      </div>
      <div>
        <ul>
          <li>Sobre</li>
          <li>Projetos</li>
          <li>Serviços</li>
          <li>Skills</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
