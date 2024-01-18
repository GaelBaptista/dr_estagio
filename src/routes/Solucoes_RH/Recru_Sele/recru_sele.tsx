import './recru_sele.css'

import home1 from '../assets_sol_rh/home1.jpg'
import home2 from '../assets_sol_rh/home2.jpg'
import about1 from '../assets_sol_rh/about1.jpg'
import about2 from '../assets_sol_rh/about2.jpg'
import experiencia1 from '../assets_sol_rh/experience1.jpg'
import experiencia2 from '../assets_sol_rh/experience2.jpg'

export function Recrutamento_Selecao () {
  return (
    <main className="main">
    {/* ==================== HOME ==================== */}
    <section className="home" id="home">
      <img src={home1} alt="" className="home__img" />

      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__data-subtitle">Soluções RH</span>
          <h1 className="home__data-title">
            Recrutamento <br /> e <b>Seleção</b>
          </h1>
          {/* <a href="#" className="button">
            Explore
          </a> */}
        </div>

        {/* <div className="home__social">
          <a href="https://www.facebook.com/" target="_blank" className="home__social-link">
            <i className="ri-facebook-box-fill"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" className="home__social-link">
            <i className="ri-instagram-fill"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" className="home__social-link">
            <i className="ri-twitter-fill"></i>
          </a>
        </div> */}

        <div className="home__info">
          <div>
            <span className="home__info-title">Fale conosco agora mesmo!</span>
            <a href="" className="button button--flex button--link home__info-button">
              Fale conosco <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          <div className="home__info-overlay">
            <img src={home2}alt="" className="home__info-img" />
          </div>
        </div>
      </div>
    </section>

    {/* ==================== ABOUT ==================== */}
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title about__title">Título<br />indefinido</h2>
          <p className="about__description">
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis harum repudiandae optio asperiores porro illum, cumque, quis ad quas eos aspernatur sapiente molestiae facilis quos nostrum doloremque quae blanditiis deserunt!
          </p>
          {/* <a href="#" className="button">
            Reserve a place
          </a> */}
        </div>

        <div className="about__img">
          <div className="about__img-overlay">
            <img src={about1} alt="" className="about__img-one" />
          </div>

          <div className="about__img-overlay">
            <img src={about2} alt="" className="about__img-two" />
          </div>
        </div>
      </div>
    </section>

    
      {/* ==================== EXPERIENCE ==================== */}
      <section className="experience section">
        <h2 className="section__title">Título <br /> indefinido</h2>

        <div className="experience__container container grid">
          <div className="experience__content grid">
            <div className="experience__data">
              <h2 className="experience__number">8 </h2>
              <span className="experience__description">Anos de <br />Mercado</span>
            </div>

            <div className="experience__data">
              <h2 className="experience__number">700+ </h2>
              <span className="experience__description">Estagiários <br /> ativos</span>
            </div>

            <div className="experience__data">
              <h2 className="experience__number">100+</h2>
              <span className="experience__description">Empresas <br /> conveniadas</span>
            </div>
          </div>

          <div className="experience__img grid">
            <div className="experience__overlay">
              <img src={experiencia1} alt="" className="experience__img-one" />
            </div>

            <div className="experience__overlay">
              <img src={experiencia2} alt="" className="experience__img-two" />
            </div>
          </div>
        </div>
      </section>
  </main>
  );
}