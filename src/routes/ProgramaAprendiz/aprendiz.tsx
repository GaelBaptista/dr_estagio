
import './aprendiz.css'

import heroo from './assets/home_Protagonista.svg'
import features from './assets/feactures.jpg'
import features2 from './assets/feactures2.jpg'


import { IoSchool } from 'react-icons/io5'
import { BsBarChartFill, BsBasket2Fill, BsBoxes, BsStars } from 'react-icons/bs'
import { BiSolidCar } from 'react-icons/bi'
import { GoLaw } from "react-icons/go";
import { HiAcademicCap, HiMinus } from 'react-icons/hi'
import { FaArrowDown, FaSchool } from 'react-icons/fa'
import { HiMiniXCircle } from "react-icons/hi2";
import { MdAttachMoney } from 'react-icons/md'

export function Aprendiz_Page () {
  return (
    <>
  

  <main>
    <article>

      

      <section className="hero_ap" id="hero">
        <div className="container_ap">

          <div className="hero_ap-content">
            <h1 className="h1_prot hero_ap-title">Instituto Tempo de Educar</h1>

            <p className="hero_ap-text">
              Aprendiz Protagonista
            </p>

            <p className="form-text">
              <span></span> O INSTITUTO TEMPO DE EDUCAR, é uma Organização da Sociedade Civil sem fins lucrativos e tem como objetivo desenvolver ações visíveis, para o desenvolvimento profissional e inserção de jovens e adolescentes no mercado de trabalho. Com olhar nessa esfera profissional, o instituto Tempo de Educar, realiza as suas atividades em convênios com empresas e instituições públicas, e com o compromisso social de contribuir para uma  transformação na vida do jovem educando.
            </p>

          </div>

          <figure className="hero_ap-banner">
            <img src={heroo} alt="Hero image"/>
          </figure>

        </div>
      </section>





      

      <section className="about_ap">
        <div className="container_ap">

          <div className="about_ap-content">

            <div className="about_ap-icon">
            <IoSchool/>
            </div>

            <h2 className="h2_prot about_ap-title">Cursos de Aprendizagem</h2>

            <p className="about_ap-text">
           O Instituto Tempo de Educar, oferece uma variedade de cursos projetados para preparar os jovens para o mercado de trabalho.            </p>

            {/* <button className="btn btn-outline">Learn More</button> */}

          </div>

          <ul className="about_ap-list">

            <li>
              <div className="about_ap-card">

                <div className="card-icon">
                <BsBarChartFill />
                </div>

                <h3 className="h3_prot card-title">Auxiliar de Administração </h3>

                {/* <p className="card-text">
Administração                </p> */}

              </div>
            </li>

            <li>
              <div className="about_ap-card">

                <div className="card-icon">
                <BsBoxes />
                </div>

                <h3 className="h3_prot card-title">Auxiliar de Produção</h3>

                {/* <p className="card-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                </p> */}

              </div>
            </li>

            <li>
              <div className="about_ap-card">

                <div className="card-icon">
                 
                <BsBasket2Fill />
                </div>

                <h3 className="h3_prot card-title">Varejo</h3>

                {/* <p className="card-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                </p> */}

              </div>
            </li>

            <li>
              <div className="about_ap-card">

                <div className="card-icon">
                <BiSolidCar />
                </div>

                <h3 className="h3_prot card-title">Frentista</h3>

                {/* <p className="card-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                </p> */}

              </div>
            </li>

          </ul>

        </div>
      </section>






      <section className="features" id="features">
        <div className="container">

          {/* <h2 className="h2_prot section-title-prot">Awesome Features</h2>

          <p className="section-text">
            Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis eligendi
            cumque.
          </p> */}

          <div className="features-wrapper">

            <figure className="features-banner">
              <img src={features} alt="illustration art"/>
            </figure>

            <div className="features-content">

              <p className="features-content-subtitle">
              <BsStars style={{color: '#560372'}} />

                <span>BENEFÍCIOS PARA </span>
              </p>

              <h3 className="features-content-title">
               Empresas ao Contratar  um Aprendiz
              </h3>

              {/* <p className="features-content-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum a necessitatibus saepe eveniet ut et
                voluptates repudiandae
                sint molestiae non recusandae itaque.
              </p> */}

              <ul className="features-list">

                <li className="features-list-item">
                <GoLaw />

                  <p>Cumprimento da Lei 10.097/2000, a Lei de Aprendizagem; </p>
                </li>

                <li className="features-list-item">
                <HiAcademicCap />

                  <p>Qualificação técnico-profissional de acordo com a atividade prática; </p>
                </li>
                <li className="features-list-item">
                <FaArrowDown />

                  <p>Redução do FGTS de 8% para 2%; ·A remuneração poderá ser o salário mínimo/hora;  </p>
                </li>
                <li className="features-list-item">
                <HiMiniXCircle />

                  <p>Dispensa do aviso prévio remunerado; </p>
                </li>
                <li className="features-list-item">
                <HiMinus />

                  <p>Isenção de multa rescisória;  </p>
                </li>
                <li className="features-list-item">
                <MdAttachMoney />

                  <p>Dedução de IR. </p>
                </li>

              </ul>

             

            </div>

          </div>

          <div className="features-wrapper">

            <figure className="features-banner">
              <img src={features2} alt="illustration art"/>
            </figure>

            <div className="features-content">

              <p className="features-content-subtitle">
              <FaSchool style={{color:'#560372'}} />

                <span>PAPP</span>
              </p>

              <h3 className="features-content-title">
                Metodologia <strong style={{color:'#560372'}}>Pedagógica</strong> Direcionada
              </h3>

              <p className="features-content-text">
              Programa de Acompanhamento Profissional e Psicológico.
Um programa de desenvolvimento profissional, social e educacional, ferramenta estratégica.
Que visa o crescimento do educando na empresa , com o objetivo de aprimorar suas competências e habilidades , um recurso de gestão de talento e aperfeiçoamento como ferramenta estratégica 
              </p>

              {/* <ul className="features-list">

                <li className="features-list-item">
                  <ion-icon name="rocket-outline"></ion-icon>

                  <p>Donec pede justo fringilla vel nec.</p>
                </li>

                <li className="features-list-item">
                  <ion-icon name="wifi-outline"></ion-icon>

                  <p>Cras ultricies mi eu turpis hendrerit fringilla.</p>
                </li>

              </ul> */}

              {/* <div className="btn-group">
                <button className="btn btn-primary">Read More</button>

                <button className="btn btn-secondary">Buy Now</button>
              </div> */}

            </div>

          </div>

        </div>
      </section>






      <section className="blog" id="blog">
        <div className="container">

          <h2 className="h2_prot section-title-prot">Latest News</h2>

          <p className="section-text">
            Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis eligendi
            cumque.
          </p>

          {/* <ul className="blog-list">

            <li>
              <div className="blog-card">

                <figure className="blog-banner">
                  <img src="./assets/images/blog-banner-1.jpg" alt="Best Traveling Place"/>
                </figure>

                <div className="blog-meta">

                  <span>
                    <ion-icon name="calendar-outline"></ion-icon>

                    <time dateTime="2021-04-10">april 10 2021</time>
                  </span>

                  <span>
                    <ion-icon name="person-outline"></ion-icon>

                    <p>admin</p>
                  </span>

                </div>

                <h3 className="blog-title">Best Traveling Place</h3>

                <p className="blog-text">
                  Integer ante arcu accumsan a consectetuer eget posuere mauris praesent adipiscing phasellus
                  ullamcorper ipsum rutrum
                  punc.
                </p>

                <a href="#" className="blog-link-btn">
                  <span>Learn More</span>

                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="blog-banner">
                  <img src="./assets/images/blog-banner-2.jpg" alt="Private Meeting Room"/>
                </figure>

                <div className="blog-meta">

                  <span>
                    <ion-icon name="calendar-outline"></ion-icon>

                    <time dateTime="2021-04-10">april 10 2021</time>
                  </span>

                  <span>
                    <ion-icon name="person-outline"></ion-icon>

                    <p>admin</p>
                  </span>

                </div>

                <h3 className="blog-title">Private Meeting Room</h3>

                <p className="blog-text">
                  Integer ante arcu accumsan a consectetuer eget posuere mauris praesent adipiscing phasellus
                  ullamcorper ipsum rutrum
                  punc.
                </p>

                <a href="#" className="blog-link-btn">
                  <span>Learn More</span>

                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="blog-banner">
                  <img src="./assets/images/blog-banner-3.jpg" alt="The Best Business Ideas"/>
                </figure>

                <div className="blog-meta">

                  <span>
                    <ion-icon name="calendar-outline"></ion-icon>

                    <time dateTime="2021-04-10">april 10 2021</time>
                  </span>

                  <span>
                    <ion-icon name="person-outline"></ion-icon>

                    <p>admin</p>
                  </span>

                </div>

                <h3 className="blog-title">The Best Business Ideas</h3>

                <p className="blog-text">
                  Integer ante arcu accumsan a consectetuer eget posuere mauris praesent adipiscing phasellus
                  ullamcorper ipsum rutrum
                  punc.
                </p>

                <a href="#" className="blog-link-btn">
                  <span>Learn More</span>

                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>

              </div>
            </li>

          </ul> */}

        </div>
      </section>





     

      <section className="contact" id="contact">
        <div className="container">

          <h2 className="h2 section-title-prot">Contact Us</h2>

          <p className="section-text">
            Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis eligendi
            cumque.
          </p>

          <div className="contact-wrapper">
{/* 
            <form action="" className="contact-form">

              <div className="wrapper-flex">

                <div className="input-wrapper">
                  <label for="name">Name*</label>

                  <input type="text" name="name" id="name" required placeholder="Enter Your Name" className="input-field">
                </div>

                <div className="input-wrapper">
                  <label for="emai">Email*</label>

                  <input type="text" name="email" id="email" required placeholder="Enter Your Email"
                    className="input-field"/>
                </div>

              </div>

              <label >Message*</label>

              <textarea name="message" id="message" required placeholder="Type Your Message"
                className="input-field"></textarea>

              <button type="submit" className="btn btn-primary">
                <span>Send Message</span>

                <ion-icon name="paper-plane-outline"></ion-icon>
              </button>

            </form> */}

            <ul className="contact-list">

              <li>
                <a href="mailto:support@website.com" className="contact-link">
                  {/* <ion-icon name="mail-outline"></ion-icon> */}

                  <span>: support@website.com</span>
                </a>
              </li>

              <li>
                <a href="#" className="contact-link">
                  {/* <ion-icon name="globe-outline"></ion-icon> */}

                  <span>: www.website.com</span>
                </a>
              </li>

              <li>
                <a href="tel:+0011234567890" className="contact-link">
                  {/* <ion-icon name="call-outline"></ion-icon> */}

                  <span>: (+001) 123 456 7890</span>
                </a>
              </li>

              <li>
                <div className="contact-link">
                  {/* <ion-icon name="time-outline"></ion-icon> */}

                  <span>: 9:00 AM - 6:00 PM</span>
                </div>
              </li>

              <li>
                <a href="#" className="contact-link">
                  {/* <ion-icon name="location-outline"></ion-icon> */}

                  <address>: 1644 Deer Ridge Drive Rochelle Park, NJ 07662</address>
                </a>
              </li>

            </ul>

          </div>

        </div>
      </section>

    </article>
  </main>




    </>
  )
}






