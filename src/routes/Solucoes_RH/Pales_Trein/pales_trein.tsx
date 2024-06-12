

import './pales_trein.css'

// import home_pn1 from './assets_pales_trein/hero-banner-1.jpg'
// import home_pn2 from './assets_pales_trein/hero-banner-2.jpg'
// import home_svg from './assets_pales_trein/hero-bg.svg'
// import home_shape from './assets_pales_trein/hero-shape-2.png'
// import about from './assets_pales_trein/about-banner.jpg'
// import shapeAbout from './assets_pales_trein/Fale conosco.svg'
// import aboutshape4 from  './assets_pales_trein/about-shape-4.svg'
// import aboutshape3 from  './assets_pales_trein/about-shape-3.jpg'
import header from './assets_pales_trein/header.jpg'
import footer from './assets_pales_trein/footer_trein.jpg'
import music from './assets_pales_trein/Seminar-bro.png'









// import { IoCheckmarkDone } from 'react-icons/io5'
// import { CSSProperties } from 'react'


// interface StatsCardProps {
//   style?: CSSProperties & {
//     '--color'?: string;
//     '--width'?: number;
//     '--height'?: number;
//   };
// }



export function Palestra_Treinamento(){
  return (
    <div>
    

      <header className="header">
        <div className="section__container header__container">
          <div className="header__image">
            <img className='img_ap' src={header} alt="header" />
          </div>
          <div className="header__content">
            <h3 className="section__subheader">Dr.Estágio</h3>
            <h1>Treinamento e Desenvolvimento</h1>
            <div className="header__btn">
              <button className="btn">Saiba Mais</button>
            </div>
          </div>
        </div>
      </header>

      <div className="section__container feature__container">
        <h3 className="section__subheader">Features</h3>
        <h2 className="section__header">Sound around the world</h2>
        <div className="feature__grid">
          <div className="feature__card">
            <div>.01</div>
            <h4>World-Class Audio Quality</h4>
            <p>Immerse yourself in the global soundscape with our speakers, engineered to deliver unparalleled audio fidelity.</p>
          </div>
          <div className="feature__card">
            <div>.02</div>
            <h4>Customizable Sound Profiles</h4>
            <p>Tailor your listening experience to match the diverse music genres and cultural preferences from different regions.</p>
          </div>
          <div className="feature__card">
            <div>.03</div>
            <h4>Music Streaming Integration</h4>
            <p>Access an extensive library of music from across the globe with integrated music streaming services.</p>
          </div>
          <div className="feature__card">
            <div>.04</div>
            <h4>Multi-Room Audio Sync</h4>
            <p>Create a synchronized audio experience throughout your home or space with multi-room audio synchronization.</p>
          </div>
        </div>
      </div>

      <section className="music">
        <div className="section__container music__container">
          <div className="music__image">
            <span>02</span>
            <img className='img_ap' src={music} alt="music" />
          </div>
          <div className="music__content">
            <h2 className="section__header">Palestras e Treinamentos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolore sint laudantium. Quos consequatur excepturi nulla aut incidunt repudiandae, debitis voluptas ut repellat quaerat architecto, corporis illum voluptate ipsum aliquam.</p>
            <div className="music__btn">
              <button className="btn">Saiba Mais</button>
            </div>
          </div>
        </div>
      </section>

      <div className="section__container client__container">
        {/* <h3 className="section__subheader">Testimonials</h3>
        <h2 className="section__header">What our listeners are saying</h2>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="client__card">
                <span><i className="ri-double-quotes-r"></i></span>
                <h4>Sarah Johnson</h4>
                <h5>Music Teacher</h5>
                <p>As a music teacher, I'm always on the lookout for high-quality audio equipment to enhance my students' learning experience. I'm thrilled with the clarity and richness of sound from these speakers.</p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="client__card">
                <span><i className="ri-double-quotes-r"></i></span>
                <h4>David Rodriguez</h4>
                <h5>DJ & Producer</h5>
                <p>These speakers are a game-changer for my DJ sets and studio sessions. The sound quality is exceptional, allowing me to hear every detail of my mixes with precision. I can't imagine performing without them.</p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="client__card">
                <span><i className="ri-double-quotes-r"></i></span>
                <h4>Emily Chen</h4>
                <h5>Interior Designer</h5>
                <p>I incorporated these speakers into a recent home renovation project, and they exceeded my expectations. Not only do they deliver superb sound quality, but their sleek design also complements any interior style perfectly.</p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="client__card">
                <span><i className="ri-double-quotes-r"></i></span>
                <h4>Jennifer Thompson</h4>
                <h5>Event Planner</h5>
                <p>I rely on top-notch audio equipment to create unforgettable experiences for my clients' events. These speakers deliver exceptional sound quality and reliability, ensuring that every event is a resounding success.</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <section className="discount">
        <div className="section__container discount__container">
          {/* <img  src="assets/discount-bg.png" alt="discount-bg" className="discount-bg img_ap" /> */}
          <div className="discount__content">
            <h2 className="section__header">Treinamento e desenvolvimento</h2>
            <p>Delve into the depths of human experience as melodies intertwine with the essence of our being, conveying emotions too profound for words alone. From the gentle whispers of a piano to the thunderous roar of a symphony, our products encapsulate the raw power and beauty of musical expression.</p>
            <div className="discount__btn">
              <button className="btn">Go to shop</button>
            </div>
          </div>
          <div className="discount__image">
            <img className='img_ap' src={footer} alt="discount" />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="section__container footer__container">
          <ul className="footer__links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Pricing</a></li>
            <li className="footer__logo">
              <a href="#" className="logo">Hut<span>.</span></a>
            </li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        <div className="footer__bar">
          Copyright © 2024 Web Design Mastery. All rights reserved.
        </div>
      </footer>
    </div>
  );
}





