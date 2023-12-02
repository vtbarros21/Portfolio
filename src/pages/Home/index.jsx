import React from "react";
import s from "../Home/styles.module.sass";

import Victor from "../../assets/Victor.png";
import Line from "../../assets/line1.png";
import Avatar from "../../assets/Avatar.png";
import Line2 from "../../assets/line2.png";
import Mail from "../../assets/mail.svg";

const Home = () => {
  return (
    <>
      <section className={s.firstSection}>
        <div className={s.firstDiv}>
          <figure>
            <img src={Victor} alt="Victor Martiliano" />
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
            <div>
              <input type="button" value="Downlod CV" className={s.btn} />
              <input
                type="button"
                value="Entrar em contato"
                className={s.contact}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={s.secondSection}>
        <figure className={s.cardMain}>
          <div className={s.containDescription}>
            <div className={s.description}>
              <h2>Sobre mim</h2>
              <p>
                <img src={Line2} alt="line" />
                Olá, sou Victor Martiliano, programador front-end e UI/UX
                Designer. Minha paixão reside na criação de experiências
                digitais excepcionais. Especializado em React, HTML, CSS e
                JavaScript, busco constantemente aprimorar minhas habilidades.
                Meu playground criativo inclui o Figma, onde dou vida às minhas
                ideias e me dedico à prototipação. Além dos meus conhecimentos
                atuais, estou imerso no estudo de outras linguagens relacionadas
                ao Front-End, buscando sempre evoluir.
              </p>
              <div className={s.circleGradient}>
                <a href="#">
                  <div className={s.circle}>
                    <img src={Mail} alt="email" />
                  </div>
                </a>
              </div>
              <div className={s.circleGradient}>
                <a href="#">
                  <div className={s.circle}>
                    <img src={Mail} alt="email" />
                  </div>
                </a>
              </div>
              <div className={s.circleGradient}>
                <a href="#">
                  <div className={s.circle}>
                    <img src={Mail} alt="email" />
                  </div>
                </a>
              </div>
              <div className={s.circleGradient}>
                <a href="#">
                  <div className={s.circle}>
                    <img src={Mail} alt="email" />
                  </div>
                </a>
              </div>
              <div className={s.circleGradient}>
                <a href="#">
                  <div className={s.circle}>
                    <img src={Mail} alt="email" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <figure>
            <img src={Avatar} alt="Avatar" />
          </figure>
        </figure>
      </section>
    </>
  );
};

export default Home;
