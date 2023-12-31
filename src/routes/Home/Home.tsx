
import {HiDocumentText} from 'react-icons/hi'
import {FaCube} from 'react-icons/fa'
import {BsPersonBadgeFill} from 'react-icons/bs'

import { MdPermContactCalendar } from 'react-icons/md'





import  { useEffect,  useRef } from 'react';
import './Home.css';
import { CardSection } from './cardSection/CardSection'

import { ContactHome } from './ContactHome/ContactHome'

import { Link } from 'react-router-dom'
import { Video } from './Video/video'
import img1 from '../../assests/banner1.jpg'
import img2 from '../../assests/banner2.jpg'
import img3 from '../../assests/banner3.jpg'
import img4 from '../../assests/banner4.jpg'
import img5 from '../../assests/banner5.jpg'
import img6 from '../../assests/banner6.jpg'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';


export function Home () {

  // const [currentSlide, setCurrentSlide] = useState(1);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prevSlide) => {
  //       if (prevSlide >= 3) {
  //         return 1;
  //       } else {
  //         return prevSlide + 1;
  //       }
  //     });
  //   }, 6000);

  //   return () => clearInterval(interval);
  // }, []);

  // const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setCurrentSlide(parseInt(event.target.value));
  // };

  const sliderRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current!; // Use ! para indicar que slider não é null
    

    // Restante do código permanece o mesmo
    function activate(e: MouseEvent) {
      const target = e.target as HTMLElement;

      if (!target.matches || typeof target.matches !== "function") {
        console.error("Element doesn't support matches function");
        return;
      }

      const items = slider.querySelectorAll(".item_slider_home_page");

      if (!items.length) {
        console.error("No items found in the slider");
        return;
      }

      target.matches(".next") && slider.append(items[0]);
      target.matches(".prev") && slider.prepend(items[items.length - 1]);
    }

    document.addEventListener("click", activate, false);

    return () => {
      document.removeEventListener("click", activate, false);
    };
  }, [sliderRef]);
  
  return (
    <>
    {/* <section id="home" className="banner">
      <div className="sliders">
      <input
          type="radio"
          name="radio-btn"
          id="radio1"
          value="1"
          checked={currentSlide === 1}
          onChange={handleRadioChange}
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio2"
          value="2"
          checked={currentSlide === 2}
          onChange={handleRadioChange}
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio3"
          value="3"
          checked={currentSlide === 3}
          onChange={handleRadioChange}
        />

<div className="slide s1">
      <div className="slidearea">
        <div className="banner-title">
          <h2>
            Mais Assertividade&nbsp;
            <span>em novas contratações!</span>
          </h2>
          <h1>Programa de  <span> Estágio</span></h1>
        </div>
      </div>
    </div>
    <div className="slide s2">
      <div className="slidearea">
        <div className="banner-title">
          <h2 >
          Aumente o potencial da sua empresa&nbsp;
            <span>com nosso</span>
          </h2>
          <h1>Programa de  <span> Estágio</span></h1>
        </div>
      </div>
    </div>
    <div className="slide s3">
      <div className="slidearea">
        <div className="banner-title">
          <h2 className='h2Mobile'>
          Capacitamos profissionais por meio de estágio para atuar em&nbsp; 
            <span>diferentes setores do</span>
          </h2>
          <h1 className='h1Mobile'>mercado  <span> de trabalho</span></h1>
        </div>
      </div>
    </div>
      </div>

      <div className="navigation-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
        <label htmlFor="radio3" className="manual-btn"></label>
      </div>
    </section> */}

<section className="slider_home_page">
      <div className="div_slider_home_page">
    <ul ref={sliderRef} className="slider">
  {/* Slides go here */}
  {[
    {
      // imageUrl: 'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg',
      imageUrl: img1,

      title: 'Mais assertividades em novas contratções',
      description:
        'Programa de Estágio',
    },
    {
      // imageUrl: 'https://i.redd.it/tc0aqpv92pn21.jpg',
      imageUrl: img2,
      title: 'Aumente o potencial da sua empresa com nosso ',
      description:
        'Programa de Estágio',
    },
    {
      // imageUrl: 'https://wharferj.files.wordpress.com/2015/11/bio_north.jpg',
      imageUrl: img3,
      title: 'Capacitamos profissionais por meio do estágio para atuar em diversas áreas',
      description:
        'Programa de Estágio',
    },
    {
      // imageUrl: 'https://images7.alphacoders.com/878/878663.jpg',
      imageUrl: img4,
      title: 'Descubra caminhos para o seu sucesso com nossas',
      description:
        'Vagas de Estágio',
    },
    {
      imageUrl: img5,
      title: 'Em Busca de Oportunidades Profissionais? Conheça nossas ',
      description:
        'Vagas de Estágio',
    },
    {
      imageUrl: img6,
      title: 'Estagiários a inovação em MOVIMENTO',
      description:
        'Programa de Estágio',
    },
    // Adicione os slides adicionais aqui conforme necessário
  ].map((slide, index) => (
    <li
      key={index}
      className="item_slider_home_page "
      style={{ backgroundImage: `url('${slide.imageUrl}')` }}
    >
      <div className="content_slider_home_page">
        <h2 className="title_slider_home_page">{slide.title}</h2>
        <p className="description_slider_home_page">  {slide.description.includes('Estágio') ? (
                <>
                  {slide.description.split('Estágio')[0]}{' '}
                  <span style={{ color: '#fb670a ' }}>Estágio</span>{' '}
                  {slide.description.split('Estágio')[1]}
                </>
              ) : (
                slide.description
              )}</p>
        {/* <button>Read More</button> */}
      </div>
    </li>
  ))}
</ul>


      <div className="nav_slider_home_page">
        <AiOutlineLeft className="btn_slider_home_page prev " size={40} />
        <AiOutlineRight  className="btn_slider_home_page next" size={40} />
      </div>
      </div>
    </section>

    <section className='sectionCardSlider'>
    
    <div className="quadrado-container">
        <div className="quadrado">
          <Link to='/projects/vagas'>
            <div className="icone"><HiDocumentText/></div>
            <div>Vagas de Estágio  </div>
            </Link>
        </div>
        <div className="quadrado">
            <Link to='/projects/contact'>
            <div className="icone"><MdPermContactCalendar/></div>
            <div>Nossos Contatos</div>
            </Link>
        </div>
        <div className="quadrado">
          <Link to='/projects/servicos'>
            <div className="icone"><FaCube/></div>
            <div>Nossos Serviços </div>
            </Link>
        </div>
        <div className="quadrado">
        <Link to='/programa-estagio'>

            <div className="icone"><BsPersonBadgeFill/></div>
            <div>Programa de Estágio</div>
            </Link>

        </div>
        {/* <div className="quadrado-quinto">
          <a href="https://wa.me/message/SUGMGVU6UMJOD1"  target="_blank" rel="noopener noreferrer">
            <div className="icone-quinto"><IoLogoWhatsapp/></div>
            <div className="whatsapp-texto">WhatsApp</div>
            <div className="numero-grande">(85) 99247-7241</div>
            </a>
        </div> */}
    </div>
    </section>
  {/* COMPONENTES */}
  <CardSection/>
  <ContactHome/>
  <Video/>
 
  

    </>
  );
}
