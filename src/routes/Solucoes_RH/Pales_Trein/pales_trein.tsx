
import './pales_trein.css'

import home_pn1 from './assets_pales_trein/hero-banner-1.jpg'
import home_pn2 from './assets_pales_trein/hero-banner-2.jpg'
import home_svg from './assets_pales_trein/hero-bg.svg'
import home_shape from './assets_pales_trein/hero-shape-2.png'
import about from './assets_pales_trein/about-banner.jpg'
import shapeAbout from './assets_pales_trein/Fale conosco.svg'
import aboutshape4 from  './assets_pales_trein/about-shape-4.svg'
import aboutshape3 from  './assets_pales_trein/about-shape-3.jpg'
import aboutshape1 from './assets_pales_trein/about-shape-1.svg'







import { IoCheckmarkDone } from 'react-icons/io5'
import { CSSProperties } from 'react'


interface StatsCardProps {
  style?: CSSProperties & {
    '--color'?: string;
    '--width'?: number;
    '--height'?: number;
  };
}



export function Palestra_Treinamento(){
  return (
    <main className='bodyy '>
      <div className='hmtl'>
    {/* HERO */}
    <section className="section hero has-bg-image" id="home" aria-label="home" style={{ backgroundImage: `url(${home_svg})` }}>
      <div className="container">
        <div className="hero-content">
        {/* <p className="section-subtitle">Soluções RH</p> */}

          <h1 className="h1 section-title">
           Palestras e<span className="span">Treinamento</span> 
          </h1>
          <p className="hero-text">
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
          </p>
          {/* <a href="#" className="btn has-before">
            <span className="span">Find courses</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </a> */}
        </div>
        <figure className="hero-banner">
          <div className="img-holder one" style={{ '--width': 270, '--height': 300 }  as StatsCardProps['style']}>
            <img src={home_pn1} width="270" height="300" alt="hero banner" className="img-cover" />
          </div>
          <div className="img-holder two" style={{ '--width': 240, '--height': 370 }  as StatsCardProps['style']}>
            <img src={home_pn2} width="240" height="370" alt="hero banner" className="img-cover" />
          </div>
         <a href=""><img src={shapeAbout} width="380" height="190" alt="" className="shape hero-shape-1 about-shape-2 " /></a> 
          <img src={home_shape} width="622" height="551" alt="" className="shape hero-shape-2"/>
        </figure>
      </div>
    </section>

    {/* CATEGORY */}
    <section className="section category" aria-label="category">
      <div className="container">
        <p className="section-subtitle">Categories</p>
        <h2 className="h2 section-title">
          Título <span className="span">a</span> definir
        </h2>
        <p className="section-text">
          Consectetur adipiscing elit sed do eiusmod tempor.
        </p>
       
      {/* <!--==================== STEPS ====================--> */}
      <section className="steps section container ">
                <div className="steps__bg " >
                    <h2 className="section__title-center steps__title">
                        Título <br/> indefinido
                    </h2>

                    <div className="steps__container grid">
                        <div className="steps__card">
                            <div className="steps__card-number">01</div>
                            <h3 className="steps__card-title">Choose defined</h3>
                            <p className="steps__card-description">
                                We have several varieties plants you can choose from.
                            </p>
                        </div>

                        <div className="steps__card">
                            <div className="steps__card-number">02</div>
                            <h3 className="steps__card-title">Choose defined</h3>
                            <p className="steps__card-description">
                                Once your order is set, we move to the next step which is the shipping.
                            </p>
                        </div>

                        <div className="steps__card">
                            <div className="steps__card-number">03</div>
                            <h3 className="steps__card-title">Choose defined </h3>
                            <p className="steps__card-description">
                                Our delivery process is easy, you receive the plant direct to your door.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
      </div>
    </section>

    {/* ABOUT */}
    <section className="section about" id="about" aria-label="about">
      <div className="container">
      <figure className="about-banner">
  <div className="img-holder" style={{ '--width': 520, '--height': 370 }  as StatsCardProps['style']}>
    <img src={about} width="520" height="370" loading="lazy" alt="about banner" className="img-cover" />
  </div>
  <img src={aboutshape1} width="360" height="420" loading="lazy" alt="" className="shape about-shape-1" />
  <img src={shapeAbout} width="371" height="220" loading="lazy" alt="" className="shape about-shape-2" />
  <img src={aboutshape3} width="722" height="528" loading="lazy" alt="" className="shape about-shape-3" />
</figure>

<div className="about-content">
  <p className="section-subtitle">About Us</p>
  <h2 className="h2 section-title">
    Tíitulo <span className="span">a</span> definir
  </h2>
  <p className="section-text">
    Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim.
  </p>
  <ul className="about-list">
    <li className="about-item">
      
      <IoCheckmarkDone color='#FF6609' />
      <span className="span">Expert Trainers</span>
    </li>
    <li className="about-item">
    <IoCheckmarkDone color='#FF6609'/>
     
      <span className="span">Online Remote Learning</span>
    </li>
    <li className="about-item">
    <IoCheckmarkDone color='#FF6609' />

      <span className="span">Lifetime Access</span>
    </li>
  </ul>
  <img src={aboutshape4} width="100" height="100" loading="lazy" alt="" className="shape about-shape-4" />
</div>
      </div>
    </section>


    {/* <!-- 
        - #STATE
      --> */}

      <section className="section stats" aria-label="stats">
        <div className="container">

          <ul className="grid-list">

            <li>
              <div className="stats-card" style={{'--color':'29.6, 110%, 41%'}  as StatsCardProps['style']}>
                <h3 className="card-title">29.3k</h3>

                <p className="card-text">indefinido</p>
              </div>
            </li>

            <li>
              <div className="stats-card" style={{'--color': "29.6, 83%, 61%"}  as StatsCardProps['style']}>
                <h3 className="card-title">32.4K</h3>

                <p className="card-text">indefinido</p>
              </div>
            </li>

            <li>
              <div className="stats-card" style={{'--color':" 29.6, 100%, 67%"}   as StatsCardProps['style']}>
                <h3 className="card-title">100%</h3>

                <p className="card-text">indefinido</p>
              </div>
            </li>

            <li>
              <div className="stats-card" style={{'--color': "29.6, 94%, 55%"}  as StatsCardProps['style']}>
                <h3 className="card-title">354+</h3>

                <p className="card-text">indefinido</p>
              </div>
            </li>

          </ul>

        </div>
      </section>
    
     
 
    </div>
  </main>
  );
}












