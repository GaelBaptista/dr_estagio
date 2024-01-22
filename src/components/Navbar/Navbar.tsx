import { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineClose,
} from "react-icons/ai";
import { RiMenuLine, RiArrowDownSLine, RiMegaphoneFill } from "react-icons/ri";
import {  FaUser } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { SlLogin } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { MdMiscellaneousServices, MdRocketLaunch } from "react-icons/md";
import "./style.css";
import { BsFillCartFill } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";
import {
  MdHealthAndSafety,

} from "react-icons/md";

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  const navMenuClass = showMenu ? "nav__menu show-menu" : "nav__menu";

  const [showMessageBox, setShowMessageBox] = useState(false);

  const showMessageBoxHandler = () => {
    setShowMessageBox(true);
  };

  const closeMessageBoxHandler = () => {
    setShowMessageBox(false);
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <header className="header__nav">
        <div className="container__nav">
          <nav className={`nav ${showMenu ? "show-menu" : ""}`}>
            <div className="nav__data">
              {/* <Link to="/" className="nav__logo">
          <i className="ri-planet-line"></i> Company
        </Link> */}
              <div className="navbar-logo">
                {/* Quadrado branco */}
                <div className="logo-square"></div>
                <div className="logo-text">Dr.Estágio</div>
                {/* Ícones de redes sociais */}
                <div className="social-icons">
                  <a
                    href="https://www.facebook.com/DrEstagios"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillFacebook
                      style={{ color: "#ff7417" }}
                      className="social-icon"
                    />
                  </a>
                  {/* Resto dos ícones de redes sociais */}
                  <a
                    href="https://www.linkedin.com/company/drestagio/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin
                      style={{ color: "#ff7417" }}
                      className="social-icon "
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram
                      style={{ color: "#ff7417" }}
                      className="social-icon"
                    />
                  </a>

                  <a
                    href="https://youtube.com/@drestagio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillYoutube
                      style={{ color: "#ff7417" }}
                      className="social-icon"
                    />
                  </a>
                </div>
              </div>

              <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                {showMenu ? (
                  <AiOutlineClose className="nav__close" />
                ) : (
                  <RiMenuLine className="nav__burger" />
                )}
              </div>
            </div>

            <div className={navMenuClass} id="nav-menu">
              <ul className="nav__list">
                <li>
                  <Link
                    to="/"
                    className="nav__link  nav__link__effect"
                    onClick={closeMenu}
                  >
                    Início
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="nav__link nav__link__effect"
                    onClick={closeMenu}
                  >
                    Sobre nós
                  </Link>
                </li>

                <li>
                  <Link
                    to="/mais"
                    className="nav__link nav__link__effect"
                    onClick={closeMenu}
                  >
                    Empresas Conveniadas
                  </Link>
                </li>

                <li className="dropdown__item">
                  <div className="nav__link">
                    Nossos Serviços{" "}
                    <RiArrowDownSLine className="dropdown__arrow" />
                  </div>

                  <ul className="dropdown__menu">
                    {/* <li>
                      <Link
                        to="/programa-estagio"
                        className="dropdown__link"
                        onClick={closeMenu}
                      >
                        <FaUser style={{ fontSize: "25px" }} /> Programa de
                        estágio
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/varejo"
                        className="dropdown__link"
                        onClick={closeMenu}
                      >
                        <BsFillCartFill style={{ fontSize: "30px" }} /> Estágio
                        para varejo
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/farmacia"
                        className="dropdown__link"
                        onClick={closeMenu}
                      >
                        <MdHealthAndSafety style={{ fontSize: "32px" }} />{" "}
                        Estágio para Farmácia
                      </Link>
                    </li> */}
                    <li className="dropdown__subitem">
                <div className="dropdown__link">
                 <MdMiscellaneousServices style={{ fontSize: "32px" }}/>Programa de Estágio<i className="ri-add-line dropdown__add"></i>
                </div>

                <ul className="dropdown__submenu">
                  <li>
                    <Link to="/recrutamento-selecao" className="dropdown__sublink">
                    <GiMagnifyingGlass style={{ fontSize: "32px" }} /> Estágio varejo
                    </Link>
                  </li>

                  <li>
                    <Link to="/palestra-treinamento" className="dropdown__sublink">
                      <MdRocketLaunch style={{ fontSize: "32px" }} />Estágio Farmácia
                    </Link>
                  </li>

                  {/* <li>
                    <Link to="/analytics/reports/refunds" className="dropdown__sublink">
                      <FaMoneyBillWave /> Refunds
                    </Link>
                  </li> */}
                </ul>
              </li>

                    <li className="dropdown__subitem">
                <div className="dropdown__link">
                 <MdMiscellaneousServices style={{ fontSize: "32px" }}/>Soluções RH<i className="ri-add-line dropdown__add"></i>
                </div>

                <ul className="dropdown__submenu">
                  <li>
                    <Link to="/recrutamento-selecao" className="dropdown__sublink">
                    <GiMagnifyingGlass style={{ fontSize: "32px" }} /> Recrutamento e Seleção
                    </Link>
                  </li>

                  <li>
                    <Link to="/palestra-treinamento" className="dropdown__sublink">
                      <MdRocketLaunch style={{ fontSize: "32px" }} />Palestra e Treinamento
                    </Link>
                  </li>

                  {/* <li>
                    <Link to="/analytics/reports/refunds" className="dropdown__sublink">
                      <FaMoneyBillWave /> Refunds
                    </Link>
                  </li> */}
                </ul>
              </li>
                  </ul>
                </li>

                <li className="dropdown__item">
                  <div className="nav__link">
                    Explorar <RiArrowDownSLine className="dropdown__arrow" />
                  </div>

                  <ul className="dropdown__menu">
                    <li>
                      <Link
                        to="/projects/contact"
                        className="dropdown__link"
                        onClick={closeMenu}
                      >
                        <BiSolidContact style={{ fontSize: "25px" }} /> Contatos
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/projects/vagas"
                        className="dropdown__link"
                        onClick={closeMenu}
                      >
                        <RiMegaphoneFill style={{ fontSize: "30px" }} /> Vagas
                        de Estágio
                      </Link>
                    </li>

                    {/* <li>
                      <Link
                        to="/projects/servicos"
                        className="dropdown__link"
                        onClick={closeMenu}
                      >
                        <MdOutlineMiscellaneousServices
                          style={{ fontSize: "30px" }}
                        />{" "}
                        Nossos Serviços
                      </Link>
                    </li> */}
                    {/* <li>
                <Link to="/projects/esg" className="dropdown__link" onClick={closeMenu}>
                  <MdRecycling style={{ fontSize: '30px' }} /> ESG no Estágio
                </Link>
              </li> */}
                  </ul>
                </li>

                <li>
                  <Link
                    to="/blog"
                    className="nav__link nav__link__effect"
                    onClick={closeMenu}
                  >
                    Blog
                  </Link>
                </li>
                <div className="nav__buttons">
                  {/* <Link
                  to='/Login_aluno'
                    href="https://igtcursos.com.br/account/"
                    className="nav__button"
                    onClick={closeMenu}
                  >
                    Sou Estagiário
                  </Link> */}
                  <Link
                 style={{ pointerEvents: 'none', opacity:'0.6', textDecoration: 'none' }}
                    to=''
                    className="nav__button Btn_Emp "
                    onClick={() => {
                      showMessageBoxHandler();
                    }}
                  ><SlLogin
                  style={{ fontSize: "18px", color: "#ff7417" }}
                />
                  Login
                  </Link>
                </div>
                {showMessageBox && (
                  <div className="message-box">
                    <div className="message-box__top">
                      <button
                        className="message-box__close"
                        onClick={closeMessageBoxHandler}
                      >
                       <IoClose   style={{ fontSize: "30px", color: "#ff7417" }}/>
                      </button>
                    </div>
                    <div className="message-box__content">
                      <h5 className="message-box__title">
                        Bem Vindo(a) a Dr.Estágio
                      </h5>
                      <p className="message-box__paragraph">
                       Faça seu Login , entre em empresa ou estagiário
                      </p>
                    </div>
                    <div className="message-box__bottom">
                      <Link
                        type="button"
                     to='/Login_aluno'
                        className="message-box__button"
                        onClick={() => {
                          setShowMessageBox(false);
                          closeMenu();
                          // window.open("/Login_aluno", "_blank");
                        }}
                      >
                      Estagiário
                      </Link>
                      <Link
                        type="button"
                     to='/Login_empresa'
                        className="message-box__button"
                        onClick={() => {
                          setShowMessageBox(false);
                          closeMenu();
                          // window.open("/Login_aluno", "_blank");
                        }}
                      >
                       Empresa
                      </Link>
                    </div>
                  </div>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </IconContext.Provider>
  );
}
