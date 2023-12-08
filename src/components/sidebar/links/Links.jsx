import s from "../styles.module.sass";

const Links = () => {
  const items = ["Inicio","Sobre Mim", "Projetos", "Serviços", "Skills"];

  return (
    <div className={s.Links}>
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default Links;
