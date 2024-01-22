
import home_pn1 from './assets_pales_trein/hero-banner-1.jpg'
import home_pn2 from './assets_pales_trein/hero-banner-2.jpg'
import home_svg from './assets_pales_trein/hero-bg.svg'
import home_shape from './assets_pales_trein/hero-shape-2.png'
import about from './assets_pales_trein/about-banner.jpg'
import shapeAbout from './assets_pales_trein/Fale conosco.svg'
import aboutshape4 from  './assets_pales_trein/about-shape-4.svg'
import aboutshape3 from  './assets_pales_trein/about-shape-3.png'
import aboutshape1 from './assets_pales_trein/about-shape-1.svg'






import './pales_trein.css'
import { IoCheckmarkDone } from 'react-icons/io5'





export function Palestra_Treinamento(){
  return (
    <main className='body_palest hmtl_pales'>
    {/* HERO */}
    <section className="section hero has-bg-image" id="home" aria-label="home" style={{ backgroundImage: `url(${home_svg})` }}>
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 section-title">
            The Best Program to <span className="span">Enroll</span> for Exchange
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
          <div className="img-holder one" style={{ '--width': 270, '--height': 300 }}>
            <img src={home_pn1} width="270" height="300" alt="hero banner" className="img-cover" />
          </div>
          <div className="img-holder two" style={{ '--width': 240, '--height': 370 }}>
            <img src={home_pn2} width="240" height="370" alt="hero banner" className="img-cover" />
          </div>
          <img src={shapeAbout} width="380" height="190" alt="" className="shape hero-shape-1" />
          <img src={home_shape} width="622" height="551" alt="" className="shape hero-shape-2"/>
        </figure>
      </div>
    </section>

    {/* CATEGORY */}
    <section className="section category" aria-label="category">
      <div className="container">
        <p className="section-subtitle">Categories</p>
        <h2 className="h2 section-title">
          Online <span className="span">Classes</span> For Remote Learning.
        </h2>
        <p className="section-text">
          Consectetur adipiscing elit sed do eiusmod tempor.
        </p>
        <ul className="grid-list">
          {/* Add category cards here */}
        </ul>
      </div>
    </section>

    {/* ABOUT */}
    <section className="section about" id="about" aria-label="about">
      <div className="container">
      <figure className="about-banner">
  <div className="img-holder" style={{ '--width': 520, '--height': 370 }}>
    <img src="./assets/images/about-banner.jpg" width="520" height="370" loading="lazy" alt="about banner" className="img-cover" />
  </div>
  <img src="./assets/images/about-shape-1.svg" width="360" height="420" loading="lazy" alt="" className="shape about-shape-1" />
  <img src="./assets/images/about-shape-2.svg" width="371" height="220" loading="lazy" alt="" className="shape about-shape-2" />
  <img src="./assets/images/about-shape-3.png" width="722" height="528" loading="lazy" alt="" className="shape about-shape-3" />
</figure>

<div className="about-content">
  <p className="section-subtitle">About Us</p>
  <h2 className="h2 section-title">
    Over 10 Years in <span className="span">Distant learning</span> for Skill Development
  </h2>
  <p className="section-text">
    Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim.
  </p>
  <ul className="about-list">
    <li className="about-item">
      {/* <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon> */}
      <span className="span">Expert Trainers</span>
    </li>
    <li className="about-item">
      {/* <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon> */}
      <span className="span">Online Remote Learning</span>
    </li>
    <li className="about-item">
      {/* <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon> */}
      <span className="span">Lifetime Access</span>
    </li>
  </ul>
  <img src="./assets/images/about-shape-4.svg" width="100" height="100" loading="lazy" alt="" className="shape about-shape-4" />
</div>
      </div>
    </section>

    {/* COURSE */}
    <section className="section course" id="courses" aria-label="course">
      <div className="container">
        <p className="section-subtitle">Popular Courses</p>
        <h2 className="h2 section-title">Pick A Course To Get Started</h2>
        <ul className="grid-list">
          {/* Add course cards here */}
        </ul>
        <a href="#" className="btn has-before">
          <span className="span">Browse more courses</span>
          {/* <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon> */}
        </a>
      </div>
    </section>
  </main>
  );
}









