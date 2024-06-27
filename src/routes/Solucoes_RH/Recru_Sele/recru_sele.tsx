import './recru_sele.css'

import home1 from './assets_sol_rh/home1.jpg'
import home2 from './assets_sol_rh/home2.jpg'
import about1 from './assets_sol_rh/contratacao2.jpg'
import about2 from './assets_sol_rh/contratacao1.jpg'
import experiencia1 from './assets_sol_rh/atencaoContrato.jpg'


export function Recrutamento_Selecao () {
  return (
    <main className="main">
    {/* ==================== HOME ==================== */}
    <section className="home" id="home">
      <img src={home1} alt="" className="home__img"  loading="lazy"
      decoding="async"/>

      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__data-subtitle">Soluções RH</span>
          <h1 className="home__data-title">
            Recrutamento <br /> e <b>Seleção</b>
          </h1>
          <a href="#about" className="button">
            Confira
          </a>
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
            <span className="home__info-title">Simplifique seu recrutamento hoje!</span>
            <a href="" className="button button--flex button--link home__info-button">
              Fale conosco <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          <div className="home__info-overlay">
            <img src={home2}alt="" className="home__info-img"  loading="lazy"
      decoding="async"/>
          </div>
        </div>
      </div>
    </section>
   



    {/* ==================== ABOUT ==================== */}
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title about__title">Riscos da Contratação <br />Mal Planejada</h2>
          <p className="about__description">
          Realizar um processo seletivo eficaz é crucial para o crescimento saudável de sua empresa.
          ma contratação inadequada pode trazer sérios prejuízos, incluindo ineficiência operacional, desmotivação da equipe e atrasos nos projetos. Esses males podem comprometer significativamente o desempenho do negócio, afetando sua reputação, lucratividade e posição competitiva no mercado.
          </p>
          {/* <a href="#" className="button">
            Reserve a place
          </a> */}
        </div>

        <div className="about__img">
          <div className="about__img-overlay">
            <img src={about1} alt="" className="about__img-one" loading="lazy"
      decoding="async" />
          </div>

          <div className="about__img-overlay">
            <img src={about2} alt="" className="about__img-two" loading="lazy"
      decoding="async" />
          </div>
        </div>
      </div>
    </section>

    {/* <!--===== SKILLS =====--> */}
            <section className="skills section" id="skills">
               

                <div className="skills__container bd-grid">          
                    <div>
                    <h2 className="section__title about__title">Por que o Processo Seletivo merece minha atenção?</h2>
                        <p className="skills__text">Uma seleção mal feita pode não apenas desperdiçar recursos financeiros,
                        mas também prejudicar o fluxo de trabalho, impactando negativamente a produtividade e o desempenho da equipe. 
                        </p>
                        
                        <h2 className="section__title about__title" > Isso não é exagero</h2>
                        <p className="skills__text">Pense nos seguintes custos baseada em porcentagem do salário de um funcionário. 
                        </p>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-html5 skills__icon'></i>
                                <span className="skills__name"> Processo Seletivo.</span>
                            </div>
                            <div className="skills__bar skills__html">

                            </div>
                            <div>
                                <span className="skills__percentage">10%</span>
                            </div>
                          
                        </div>
                        {/* <span className="skills__name">Cerca de 10% do salário anual do funcionário.</span>
                        <br />
                        <br /> */}
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-css3 skills__icon'></i>
                                <span className="skills__name"> Tempo dos Profissionais de RH</span>
                            </div>
                            <div className="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">20%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-javascript skills__icon' ></i>
                                <span className="skills__name">Treinamento</span>
                            </div>
                            <div className="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">15%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxs-paint skills__icon'></i>
                                <span className="skills__name">Meses de Salário Desperdiçados</span>
                            </div>
                            <div className="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">100%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxs-paint skills__icon'></i>
                                <span className="skills__name">Encargos e Benefícios</span>
                            </div>
                            <div className="skills__bar skills__ux2">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">30%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxs-paint skills__icon'></i>
                                <span className="skills__name">Improdutividade e Retrabalhos</span>
                            </div>
                            <div className="skills__bar skills__ux3">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">25 %</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>              
                        <img src={experiencia1} alt="" className="skills__img" loading="lazy"
      decoding="async"/>
                    </div>
                </div>
            </section>

    
      {/* ==================== EXPERIENCE ==================== */}
      {/* <section className="experience section">
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
              <img src={experiencia1} alt="" className="experience__img-one"loading="lazy"
      decoding="async" />
            </div>

            <div className="experience__overlay">
              <img src={experiencia2} alt="" className="experience__img-two" loading="lazy"
      decoding="async"/>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!--==================== STEPS ====================--> */}
            <section className="steps section container">
                <div className="steps__bg">
                    <h2 className="section__title-center steps__title">
                        Simplifique seu Recrutamento<br/>com a Dr.Estágio
                    </h2>

                    <div className="steps__container grid">
                        <div className="steps__card">
                            {/* <div className="steps__card-number">Dr.Estágio</div> */}
                            {/* <h3 className="steps__card-title">Choose defined</h3> */}
                            <p className="steps__card-description">
                            Desde 2015, a Dr. Estágio é uma marca registrada no INPI, atuando em todo o território nacional, com serviços no Ceará e Rio Grande do Norte. Somos especialistas em programas de estágio, jovem aprendiz e recrutamento e seleção focados no varejo. Nossa expertise e compreensão das necessidades dos clientes garantem a identificação e alocação eficaz de talentos.

Nosso diferencial inclui avaliações por analistas comportamentais e psicólogos, entrevistas para avaliar a adequação dos candidatos e a apresentação dos 3 melhores candidatos com 180 dias de garantia na contratação. Atuamos em diversas áreas como varejo, farmácia, comércio, vendas, recursos humanos, tecnologia, marketing, contratação temporária e outras. Utilizamos um banco de currículos próprio, metodologia de headhunting e participação em eventos para captar novos talentos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
  </main>
  );
}

