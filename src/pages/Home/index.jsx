import React from "react";
import s from "./styles.module.sass";
import { Link } from "react-router-dom";

import Victor from "../../assets/Victor.png";
import Line from "../../assets/line1.png";
import Avatar from "../../assets/Avatar.png";
import Line2 from "../../assets/line2.png";
import Mail from "../../assets/mail.svg";
import Instagram from "../../assets/instagram.svg";
import Phone from "../../assets/phone.svg";
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";
import Code from "../../assets/code.svg";
import Figma from "../../assets/figma.svg";
import Smartphone from "../../assets/smartphone.svg";
import Next from "../../assets/next.png";
import Bootstrap from "../../assets/bootstrap.png";
import Javascript from "../../assets/javascript.svg";
import Nail from "../../assets/styledcomponents.png";
import Reacao from "../../assets/react.svg";
import Sass from "../../assets/sass.png";

const Home = () => {
  return (
    <>
      <section id="#inicio" className={s.Inicio}>
        <div className={s.firstDiv}>
          <figure>
            <img src={Victor} alt="Victor Martiliano" className={s.picture} />
          </figure>
        </div>
        <div className={s.allignContent}>
          <figure>
            <img src={Line} alt="Linha de separação" className={s.spline} />
          </figure>
          <div className={s.contactDownload}>
            <h1 className={s.title}>
              Victor <strong className={s.strong}>ツ</strong> Martiliano
            </h1>
            <p className={s.subtitle}>Desenvolvedor Front-End & UI Designer</p>
            <div className={s.allignBtn}>
              <a href="/Victor.pdf" download={true} target="_blank">
                <input type="button" value="Downlod CV" className={s.btn} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5521979900407"
                target="_blank"
              >
                <input
                  type="button"
                  value="Entrar em contato"
                  className={s.contact}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="sobre" className={s.SobreMim}>
        <div className={s.mainGradient}>
          <div className={s.mainBackground}>
            <div className={s.containDescription}>
              <div className={s.description}>
                <h2>Sobre mim</h2>
                <p>
                  <img src={Line2} alt="line" className={s.LinhaColorida} />
                  Olá, sou Victor Martiliano, programador front-end e UI/UX
                  Designer. Minha paixão reside na criação de experiências
                  digitais excepcionais. Especializado em React, HTML, CSS e
                  JavaScript, busco constantemente aprimorar minhas habilidades.
                  Meu playground criativo inclui o Figma, onde dou vida às
                  minhas ideias e me dedico à prototipação. Além dos meus
                  conhecimentos atuais, estou imerso no estudo de outras
                  linguagens relacionadas ao Front-End, buscando sempre evoluir.
                </p>
                <div className={s.alignCircle}>
                  <div className={s.circleGradient}>
                    <a
                      href="mailto:victorhugo21.contato@gmail.com"
                      target="_blank"
                    >
                      <div className={s.circle}>
                        <img src={Mail} alt="email" />
                      </div>
                    </a>
                  </div>
                  <div className={s.circleGradient}>
                    <a
                      href="https://www.instagram.com/ofc_vete/"
                      target="_blank"
                    >
                      <div className={s.circle}>
                        <img src={Instagram} alt="instagram" />
                      </div>
                    </a>
                  </div>
                  <div className={s.circleGradient}>
                    <a
                      href="https://api.whatsapp.com/send?phone=5521979900407"
                      target="_blank"
                    >
                      <div className={s.circle}>
                        <img src={Phone} alt="telefone" />
                      </div>
                    </a>
                  </div>
                  <div className={s.circleGradient}>
                    <a href="https://github.com/vtbarros21" target="_blank">
                      <div className={s.circle}>
                        <img src={Github} alt="Github" />
                      </div>
                    </a>
                  </div>
                  <div className={s.circleGradient}>
                    <a
                      href="https://www.linkedin.com/in/victor-martiliano/"
                      target="_blank"
                    >
                      <div className={s.circle}>
                        <img src={Linkedin} alt="email" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <figure>
              <img src={Avatar} alt="Avatar" className={s.personagem} />
            </figure>
          </div>
        </div>
      </section>
      <section id="projetos" className={s.Projetos}>
        <div className={s.thirdySection}>
          <h2>Projetos</h2>
          <div className={s.alignCard}>
            <div className={s.backgroundGradient}>
              <div className={s.backgroundBlack}>
                <div className={s.backgroundProject}></div>
                <div className={s.alignText}>
                  <h4>Titulo do projeto</h4>
                  <p>Tecnologias: HTML, CSS e JS.</p>
                </div>
              </div>
            </div>
            <div className={s.backgroundGradient}>
              <div className={s.backgroundBlack}>
                <div className={s.backgroundProject}></div>
                <div className={s.alignText}>
                  <h4>Titulo do projeto</h4>
                  <p>Tecnologias: HTML, CSS e JS.</p>
                </div>
              </div>
            </div>
            <div className={s.backgroundGradient}>
              <div className={s.backgroundBlack}>
                <div className={s.backgroundProject}></div>
                <div className={s.alignText}>
                  <h4>Titulo do projeto</h4>
                  <p>Tecnologias: HTML, CSS e JS.</p>
                </div>
              </div>
            </div>
            <div className={s.backgroundGradient}>
              <div className={s.backgroundBlack}>
                <div className={s.backgroundProject}></div>
                <div className={s.alignText}>
                  <h4>Titulo do projeto</h4>
                  <p>Tecnologias: HTML, CSS e JS.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.allignButton}>
          <Link to="/Projects">
            <input type="button" value="Ver Mais" className={s.verMais} />
          </Link>
        </div>
      </section>
      <section id="serviços" className={s.Serviços}>
        <div className={s.quarterSection}>
          <h2>Serviços</h2>
          <div className={s.alignCard}>
            <div className={s.gradientCard}>
              <div className={s.blackCard}>
                <figure>
                  <img src={Code} alt="Code" />
                  <h3>Criação de sites</h3>
                </figure>
              </div>
            </div>
            <div className={s.gradientCard}>
              <div className={s.blackCard}>
                <figure>
                  <img src={Figma} alt="Code" />
                  <h3>UI/UX Designer</h3>
                </figure>
              </div>
            </div>
            <div className={s.gradientCard}>
              <div className={s.blackCard}>
                <figure>
                  <img src={Smartphone} alt="Code" />
                  <h3>Sites responsivos</h3>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className={s.Skills}>
        <div className={s.fifithSection}>
          <h2>Skills</h2>
          <div className={s.alignSkills}>
            <div className={s.alignService}>
              <div className={s.backgroundgradientIcon}>
                <div className={s.backgroundIcons}>
                  <figure>
                    <img src={Next} alt="next" />
                  </figure>
                </div>
              </div>
            </div>
            <div className={s.alignService}>
              <div className={s.backgroundgradientIcon}>
                <div className={s.backgroundIcons}>
                  <figure>
                    <img src={Bootstrap} alt="Bootstrap" />
                  </figure>
                </div>
              </div>
            </div>
            <div className={s.alignService}>
              <div className={s.backgroundgradientIcon}>
                <div className={s.backgroundIcons}>
                  <figure>
                    <img src={Javascript} alt="Javascript" />
                  </figure>
                </div>
              </div>
            </div>
            <div className={s.alignService}>
              <div className={s.backgroundgradientIcon}>
                <div className={s.backgroundIcons}>
                  <figure>
                    <img src={Nail} alt="Styled-Components" />
                  </figure>
                </div>
              </div>
            </div>
            <div className={s.alignService}>
              <div className={s.backgroundgradientIcon}>
                <div className={s.backgroundIcons}>
                  <figure>
                    <img src={Reacao} alt="React" />
                  </figure>
                </div>
              </div>
            </div>
            <div className={s.alignService}>
              <div className={s.backgroundgradientIcon}>
                <div className={s.backgroundIcons}>
                  <figure>
                    <img src={Sass} alt="Sass" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
