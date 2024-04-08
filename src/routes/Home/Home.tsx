
import {HiDocumentText} from 'react-icons/hi'

import {BsPersonBadgeFill} from 'react-icons/bs'

import {  MdRocketLaunch } from 'react-icons/md'





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
import { GiMagnifyingGlass } from 'react-icons/gi';
import { Solucoes_Section } from './SolucoesRH/Solucoes';
import { IoSchool } from 'react-icons/io5';
import { Aprendiz } from './Aprendizagem/Aprendiz';




export function Home () {

  


  const sliderRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current!;

    let intervalId: NodeJS.Timeout;

    function activate() {
      const items = slider.querySelectorAll(".item_slider_home_page");

      if (!items.length) {
        console.error("No items found in the slider");
        return;
      }

      // isso faz mover o primerio card o  item para o final 
      slider.append(items[0]);
    }

   
    intervalId = setInterval(() => {
      activate();
    }, 5000);

    // limp o interevalo 
    return () => {
      clearInterval(intervalId);
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
        'Programa de Estágio e Aprendizagem',
    },
    {
      // imageUrl: 'https://i.redd.it/tc0aqpv92pn21.jpg',
      imageUrl: img2,
      title: 'Aumente o potencial da sua empresa com nosso ',
      description:
        'Programa de Aprendizagem',
    },
    {
      // imageUrl: 'https://wharferj.files.wordpress.com/2015/11/bio_north.jpg',
      imageUrl: img3,
      title: 'Trilhas Estratégicas para o Sucesso Empresarial',
      description:
        'Recrutamento e Seleção',
    },
    {
      // imageUrl: 'https://images7.alphacoders.com/878/878663.jpg',
      imageUrl: img4,
      title: 'Gestão de Talentos e Crescimento Organizacional',
      description:
        'Treinamento e Desenvolvimento',
    },
    {
      imageUrl: img5,
      title: 'Em Busca de Oportunidades Profissionais? ',
      description:
        'Conheça nossas Vagas',
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
        <p className="description_slider_home_page">
  {slide.description.includes('Estágio') ? (
    <>
      {slide.description.split('Estágio')[0]}{' '}
      <span style={{ color: '#fffff' }}>Estágio</span>{' '}
      {slide.description.split('Estágio')[1]}
    </>
  ) : slide.description.includes('Seleção') ? (
    <>
      {slide.description.split('Seleção')[0]}{' '}
      <span style={{ color: '#fffff' }}>Seleção</span>{' '}
      {slide.description.split('Seleção')[1]}
    </>
  ) : slide.description.includes('Treinamentos') ? (
    <>
      {slide.description.split('Treinamentos')[0]}{' '}
      <span style={{ color: '#fffff' }}>Treinamento</span>{' '}
      {slide.description.split('Treinamentos')[1]}
    </>
  ) : (
    slide.description
  )}
</p>
        {/* <button>Read More</button> */}
      </div>
    </li>
  ))}
</ul>


      {/* <div className="nav_slider_home_page">
        <AiOutlineLeft className="btn_slider_home_page prev " size={40} />
        <AiOutlineRight  className="btn_slider_home_page next" size={40} />
      </div> */}
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
            <Link to='/recrutamento-selecao'>
            <div className="icone"><GiMagnifyingGlass/></div>
            <div>Recrutamento e Seleção</div>
            </Link>
        </div>
        <div className="quadrado">
          <Link to='/palestra-treinamento'>
            <div className="icone"><MdRocketLaunch/></div>
            <div>Treinamento e Desenvolvimento</div>
            </Link>
        </div>
        <div className="quadrado">
        <Link to='/programa-estagio'>

            <div className="icone"><BsPersonBadgeFill/></div>
            <div>Programa de Estágio</div>
            </Link>

        </div>
        <div className="quadrado">
        <Link to='/programa-estagio'>

            <div className="icone"><IoSchool/></div>
            <div>Programa de Aprendizagem</div>
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
  <Aprendiz/>
  <Solucoes_Section/>
  <ContactHome/>
  <Video/>

  
 
  

    </>
  );
}
