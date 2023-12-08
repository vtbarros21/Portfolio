import s from "./styles.module.sass"


const NavbarDesktop = () => {
  return (
    <nav>
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
  )
}

export default NavbarDesktop