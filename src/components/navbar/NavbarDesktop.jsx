import { useEffect } from "react";
import s from "./styles.module.sass";

const NavbarDesktop = () => {

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavios: "smooth",
        });
      });
    });
  });

  return (
    <nav>
      <ul className={s.ul}>
        <li>
          <a href="#inicio" className={s.li}>
            Inicio
          </a>
        </li>
        <li>
          <a href="#sobre" className={s.li}>
            Sobre
          </a>
        </li>
        <li>
          <a href="/#projetos" className={s.li}>
            Projetos
          </a>
        </li>
        <li>
          <a href="#serviços" className={s.li}>
            Serviços
          </a>
        </li>
        <li>
          <a href="#skills" className={s.li}>
            Skills
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
