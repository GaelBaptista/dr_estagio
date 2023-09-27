
import  { useState } from "react";
import { Link,   } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineClose} from "react-icons/ai"
import { RiMenuLine,  RiArrowDownSLine, RiWhatsappFill, RiMegaphoneFill } from "react-icons/ri";
import {  FaUser } from "react-icons/fa";
import {BiSolidContact } from "react-icons/bi"

import "./style.css";
import { BsFillCartFill } from "react-icons/bs";
import { MdHealthAndSafety, MdOutlineMiscellaneousServices, MdRecycling } from "react-icons/md";


export function Navbar() {


  const [showMenu, setShowMenu] = useState(false);


  const toggleMenu = () => {
    console.log('toggleMenu is called');
    setShowMenu(!showMenu);
  };
  const navMenuClass = showMenu ? "nav__menu show-menu" : "nav__menu";

  return (
 
      <IconContext.Provider value={{ color: "#fff" }}>
   <header className="header__nav">
    <div className="container__nav">

  
    <nav className={`nav ${showMenu ? "show-menu" : ""}`}>
      <div className="nav__data">
        {/* <Link to="/" className="nav__logo">
          <i className="ri-planet-line"></i> Company
        </Link> */}
        <div  className="navbar-logo">
              {/* Quadrado branco */}
              <div className="logo-square"></div>
              <div className="logo-text">Dr.Estágio</div>
              {/* Ícones de redes sociais */}
              <div className="social-icons">
                <a href="https://www.facebook.com/DrEstagios" target="_blank" rel="noopener noreferrer" >
                  <AiFillFacebook style={{ color: '#ff7417' }} className="social-icon" />
                </a>
                {/* Resto dos ícones de redes sociais */}
                <a href="https://www.linkedin.com/company/drestagio/" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin style={{ color: '#ff7417'}} className="social-icon " />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram style={{ color: '#ff7417' }} className="social-icon" />
                </a>
               
                <a href="https://wa.me/message/SUGMGVU6UMJOD1" target="_blank" rel="noopener noreferrer">
                  <RiWhatsappFill style={{ color: '#ff7417' }} className="social-icon" />
                </a>
                <a href="https://youtube.com/@drestagio" target="_blank" rel="noopener noreferrer">
                  <AiFillYoutube style={{ color: '#ff7417' }} className="social-icon" />
                </a>
              </div>
            </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          {showMenu ? <AiOutlineClose className="nav__close" /> : <RiMenuLine className="nav__burger" />}
        </div>
      </div>

      <div className={navMenuClass} id="nav-menu">
        <ul className="nav__list">
          <li>
            <Link to="/" className="nav__link" >
             Início
            </Link>
          </li>

          <li>
            <Link to="/about" className="nav__link" >
              Sobre nós
            </Link>
          </li>
         
          <li>
            <Link to="/mais" className="nav__link" >
              Empresas Conveniadas
            </Link>
          </li>
         
          <li className="dropdown__item">
            <div className="nav__link">
             Sobre Estágio <RiArrowDownSLine className="dropdown__arrow" />
            </div>

            <ul className="dropdown__menu">
              <li>
                <Link to="/programa-estagio" className="dropdown__link">
                  <FaUser style={{ fontSize: '25px' }} /> Programa de estágio
                </Link>
              </li>
              

              <li>
                <Link to="/varejo" className="dropdown__link">
                  <BsFillCartFill style={{ fontSize: '30px' }} /> Estágio para varejo
                </Link>
              </li>
              
              <li>
                <Link to="/farmacia" className="dropdown__link">
                  <MdHealthAndSafety style={{ fontSize: '32px' }} /> Estágio para Farmácia
                </Link>
              </li>

              {/* <li className="dropdown__subitem">
                <div className="dropdown__link">
                  <FaMoneyBillWave /> Reports <i className="ri-add-line dropdown__add"></i>
                </div>

                <ul className="dropdown__submenu">
                  <li>
                    <Link to="/analytics/reports/documents" className="dropdown__sublink">
                      <FaMoneyBillWave /> Documents
                    </Link>
                  </li>

                  <li>
                    <Link to="/analytics/reports/payments" className="dropdown__sublink">
                      <FaMoneyBillWave /> Payments
                    </Link>
                  </li>

                  <li>
                    <Link to="/analytics/reports/refunds" className="dropdown__sublink">
                      <FaMoneyBillWave /> Refunds
                    </Link>
                  </li>
                </ul>
              </li> */}
            </ul>
          </li>

          

          <li className="dropdown__item">
            <div className="nav__link">
              Mais <RiArrowDownSLine  className="dropdown__arrow" />
            </div>

            <ul className="dropdown__menu">
              <li>
                <Link to="/projects/contact" className="dropdown__link">
                  <BiSolidContact style={{ fontSize: '25px' }} /> Contatos
                </Link>
              </li>

              <li>
                <Link to="/projects/vagas" className="dropdown__link">
                  <RiMegaphoneFill style={{ fontSize: '30px' }} /> Vagas de  Estágio
                </Link>
              </li>

              <li>
                <Link to="/projects/servicos" className="dropdown__link">
                  <MdOutlineMiscellaneousServices style={{ fontSize: '30px' }} /> Nossos Serviços
                </Link>
              </li>
              <li>
                <Link to="/projects/esg" className="dropdown__link">
                  <MdRecycling style={{ fontSize: '30px' }} /> ESG no Estágio
                </Link>
              </li>
            </ul>
          </li>


          <li>
            <Link to="/about" className="nav__link" >
            Blog
            </Link>
          </li>
         
        </ul>
      </div>
    </nav>
    </div>
    </header>
 </IconContext.Provider>
  );
}
