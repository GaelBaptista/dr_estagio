// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsFillMegaphoneFill,  BsFillHeartPulseFill, BsBuildingFillGear, BsPersonFillGear } from 'react-icons/bs'; // Importe os ícones que você está usando
import{HiDocumentText} from 'react-icons/hi'

type CardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="card">
      <i className="icon">{icon}</i>
      <h3 className="title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const CarouselComponent = () => {
  const cardData = [
    {
      icon: <BsFillMegaphoneFill />,
      title: 'Divulgação de vagas',
      description: 'Colaboramos e auxiliamos na divulgação das vagas ofertadas pelas empresas conveniadas e realizamos  o envio de currículos para o recrutamento e seleção de novos  estagiários.',
    },
    {
      icon: <HiDocumentText />,
      title: 'Gestão de Contratos',
      description: 'Cuidamos de todos os aspectos burocráticos da contratação de estagiários, incluindo Termos de Compromisso, Desligamento e Aditivos, com assinatura eletrônica para eficiência.',
    },
    {
      icon: <BsFillHeartPulseFill />,
      title: 'Seguro de Vida',
      description: 'O Seguro de Vida é obrigatório por lei no Estágio e com a Dr. Estágio seus estagiários estarão  protegidos e assegurados.',
    },
    {
      icon: <BsBuildingFillGear />,
      title: 'Suporte a Empresa',
      description: 'Contamos com uma equipe de analistas especializados para atender as demandas das empresas dando assitência em todas as áreas do programa de estágio.',
    },
    {
      icon: <BsPersonFillGear />,
      title: 'Suporte ao Estagiário',
      description: ' Os estagiários podem receber atendimento, esclarecer dúvidas e formalizar a assinatura dos termos de estágio por meio de um canal exclusivo.',
    },
  ];

  const slickSettings = {
    dots: true, // Mostrar bolinhas (indicadores)
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Quando a largura da tela for 1024px ou menos
        settings: {
          slidesToShow: 2, // Exibir 2 slides por vez
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Quando a largura da tela for 768px ou menos
        settings: {
          slidesToShow: 1, // Exibir apenas 1 slide por vez
          slidesToScroll: 1,
        },
      },
    ],

    // Outras opções de personalização aqui
  };

  return (
    <section className="section sectionServicos" id="services">
      <div className="container">
        <header>
          <h2 className="title">Nossos serviços incluem</h2>
          <p className="subtitle">A <strong>Dr.Estágio</strong> é um facilitador na contratação de estagiários realizando todo o processo burocrático, desde a divulgação das vagas, emissão dos termos, seguro de vida, suporte e acompanhamento. Auxiliamos sua equipe de RH em todo processo, garantindo assim mais produtividade e gestão de tempo.</p>
        </header>
        <div className='info-card-serv'>
          
        <Slider {...slickSettings}>
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </Slider>
        
        </div>
      </div>
    </section>
  );
};
export default CarouselComponent;
