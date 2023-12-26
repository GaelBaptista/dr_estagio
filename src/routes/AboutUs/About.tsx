import './about.css'
import React, { useEffect, useState }  from 'react';
import ImgAbout from '../../assests/AboutusIMG.png'
import TimelineBG from '../../assests/Timeline_BG.png'

import rocket from '../../assests/svg_login/to-the-stars-animate.svg'

// Timeline
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


// icones
import { BsFillHexagonFill } from 'react-icons/bs';

import {MdGroups2, MdEmail} from 'react-icons/md'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { VidSobreNos } from './DrEstagioVid/VidSobreNos';




const hexagonOrange = {
  icon: <BsFillHexagonFill icon={BsFillHexagonFill} />,
  iconStyle: { background: '#fff', color: '#FF6609' },
};
const hexagonBlue = {
  icon: <BsFillHexagonFill icon={BsFillHexagonFill} />,
  
  iconStyle: { background: '#fff', color: '#121242' },
 
};


 


export function About() {


  const timeline = [
    {
      icon: hexagonOrange,
      date: '',
      title: 'Contratação mais assertiva',
      subtitle: '',
      desc: 'Contrate inicialmente na modalidade de estágio essa abordagem possibilita uma análise completa das habilidades, adaptação à cultura da empresa e potencial de crescimento, resultando em decisões de contratação mais assertivas.',
    },
    {
      icon: hexagonBlue,
      date: '',
      title: 'Profissionais em treinamento',
      subtitle: '',
      desc: 'Os estudantes tem a oportunidade de aplicar seus conhecimentos teóricos em estágios de acordo com o curso da área de atuação, capacitando-se com técnicas e habilidades para o seu desenvolvimento profissional destacando-se no mercado de trabalho.',
    },
    {
      icon: hexagonOrange,
      date: '',
      title: 'Plano de carreira',
      subtitle: '',
      desc: 'O fator motivacional de uma contratação efetiva, faz com que o estagiário tenha uma visão de plano de carreira dentro da empresa.',
    },
    {
      icon: hexagonBlue,
      date: '',
      title: 'Redução de turnover',
      subtitle: '',
      desc: 'Visando o crescimento dentro da organização por meio de um plano de carreira é possível reduzir a rotatividade entre os colaboradores CLT.',
    },
   
   
  ];


  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
   
  //   setTimeout(() => {
  //     setProgress(85);
  //   }, 500);
  // }, [])

  const [Assert, setAssert] = useState(0);

  useEffect(() => {
    // Ao montar o componente, atualize o estado para 85 após um pequeno atraso (opcional)
    setTimeout(() => {
      setAssert(60);
    }, 500); // Ajuste o valor do atraso conforme necessário
  }, [])
  const [Reducao, setReducao] = useState(0);

  useEffect(() => {
    // Ao montar o componente, atualize o estado para 85 após um pequeno atraso (opcional)
    setTimeout(() => {
      setReducao(55);
    }, 500); // Ajuste o valor do atraso conforme necessário
  }, [])

  const [Produtividade, setProdutividade] = useState(0);

  useEffect(() => {
    // Ao montar o componente, atualize o estado para 85 após um pequeno atraso (opcional)
    setTimeout(() => {
      setProdutividade(40);
    }, 500); // Ajuste o valor do atraso conforme necessário
  }, [])

  const [Economia, setEconomia] = useState(0);

  useEffect(() => {
    // Ao montar o componente, atualize o estado para 85 após um pequeno atraso (opcional)
    setTimeout(() => {
      setEconomia(65);
    }, 500); // Ajuste o valor do atraso conforme necessário
  }, [])
  
// FUNÇÂO PARA O EMAIL
  const recipientEmail = "comercial@drestagio.com.br";
  const mailtoLink = `mailto:${recipientEmail}`;

  return (
  <>
  {/* quem somos */}
  <div className="section-head about-TITLE ">
          <h4>Quem <strong>Somos</strong></h4>
          <div className='divider__title'>
            
          <span className="hr-line"><span><span></span></span></span>
          
          </div>
          <p>Atuando no mercado desde 2015 e com marca registrada no INPI, a <strong> Dr.Estágio </strong> estende sua atuação por todo o
             território nacional, atualmente prestando serviços nos estados do Ceará e Rio Grande do Norte.
             Como especialistas em programas de estágio voltados para o varejo, desempenhamos um papel fundamental no 
             desenvolvimento de profissionais de destaque no setor supermercadista. Ao nos tornarmos parceiros de 
             empresas conveniadas, proporcionamos a oportunidade de lapidar 
             jovens talentos por meio do estágio, contribuindo para a formação de futuros profissionais qualificados. </p>
        </div>
  {/* Nossa proposta*/}
    <section className="landing-page">

  <div className="contentAbout">
      <div className="containerAbout">
        <div className="infoImageContainer">
          <div className="infoAbout">
            <h1>Nossa Proposta</h1>
            <p >
        Formar junto às empresas conveniadas um banco de jovens talentos especializados nos
      departamentos e funções específicas, suprindo assim a necessidade de mão de obra
      qualificada para ocupar futuras vagas de colaborador CLT.
      A <strong> DR.ESTÁGIO </strong> ajuda a sua empresa na redução de custos e ganho na produtividade com
      a qualidade no atendimento da sua unidade.
      Contar com estagiários no dia a dia tem muitos benefícios,isso porque eles tem maior flexibilidade e adaptabilidade para aprender 
      e executar diversas tarefas. <br /><br />Junte-se a nós como parte de nossa rede de conveniados e usufrua de todos os 
      benefícios que nosso programa de estágio tem a oferecer para aprimorar o quadro de colaboradores da sua 
      empresa.
            </p>
            {/* <button>Fale Conosco</button> */}
          </div>

          {/* Barra de Progresso */}
          {/* <div className="assertiveness">
            <h2>Assertividade</h2>
            <div className="progressContainer">
              <div className="progressBar">
                <div
                  className="progressBarFill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="progressBox" style={{ left: `${progress}%` }}>
                <span>{`${progress}%`}</span>
              </div>
            </div>
          </div> */}
        </div>

        <div className="image">
          <img src={ImgAbout} alt="Imagem sobre o assunto" />
        </div>
      </div>
    </div>

{/* video institucional */}
<VidSobreNos/>



{/* =======================================================GESTAO DE DH TITULO ================================================================ */}
 
      <div className="section-head ">
          <h4><span>Gestão de</span>DH</h4>
          <div className='divider__title'>
            
          <span className="hr-line"><span><span></span></span></span>
          
          </div>
          <p className='gestaodh'>Promover uma gestão do desenvolvimento humano (DH) significa impulsionar o 
          desenvolvimento e aprimoramento dos jovens profissionais 
          dentro das organizações capacitando-os a crescer, aprender e contribuir de forma significativa.

          </p>
        </div>

{/*====================================================== TIMELINE================================================================= */}

    <div className='landing-page-timeline'>

        <VerticalTimeline lineColor='#ccc' >
        {timeline.map((t, i) => {
          const contentStyle =
            i === 0
              ? { background: '#FF6609', color: '#fff' }
              : undefined;
          const arrowStyle =
            i === 0
              ? { borderRight: '7px solid #FF6609' }
              : undefined;
              

          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              date={t.date}
              dateClassName="dateTimeline"
              {...t.icon}
            >
              {t.title ? (
                <React.Fragment>
                  <h3 className="vertical-timeline-element-title">{t.title}</h3>
                  {t.subtitle && (
                    <h4 className="vertical-timeline-element-subtitle">
                      {t.subtitle}
                    </h4>
                  )}
                  {t.desc && <p>{t.desc}</p>}
                </React.Fragment>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>


      </div>


{/* fale com nossa equipe  */}

      <div className="card-sectionAbout">
      <div className="cardAbout orange-cardAbout">
        <div className="iconAbout">
          <MdGroups2 />
        </div>
        <h2 className="titleAbout" style={{color:'#fff'}}>Alguma dúvida?</h2>
        <p className="textAbout">Fale com nossa equipe:</p>
        <a  href="https://api.whatsapp.com/send?phone=5585991377789" target="_blank" rel="noopener noreferrer">
        <button className="contact-btnAbout-orange">
          <AiOutlineArrowRight  /> Fale Conosco
        </button>
        </a>
      </div>
      <div className="cardAbout blue-cardAbout">
        <div className="iconAbout">
          <MdEmail/>
        </div>
        <h2 className="titleAbout" style={{color:'#fff'}}>Mande um E-mail</h2>
        <p className="textAbout">Escreva para nossa equipe</p>
        <a href={mailtoLink}>
        <button className="contact-btnAbout-blue">
          <AiOutlineArrowRight /> Fale Conosco
        </button>
        </a>
      </div>
    </div>


    
     {/* multiplas barras de progresso  */}
        
    <div className="contentAbout">
      <div className="containerAbout">
        <div className="infoImageContainer">
          <div className="infoAbout">
            <h1>Indicadores do Programa de Estágio </h1>
            {/* <p>
           Temos equipes de suporte para a sua empresa e para seus estagiários 
            </p> */}
            
          </div>

          {/* Barra de Progresso */}
          <div className="assertiveness">
            <h5>Assertividade em efetivações</h5>
            <div className="progressContainer">
              <div className="progressBar">
                <div
                  className="progressBarFill"
                  style={{ width: `${Assert}%` }}
                />
              </div>
              <div className="progressBox" style={{ left: `${Assert}%` }}>
                <span>{`${Assert}%`}</span>
              </div>
            </div>



          </div>

          {/* Asssertiv 2 */}

          <div className="assertiveness">
      
          <h5>Redução de Turnover</h5>
            <div className="progressContainer">
              <div className="progressBar">
                <div
                  className="progressBarFill"
                  style={{ width: `${Reducao}%` }}
                />
              </div>
              <div className="progressBox" style={{ left: `${Reducao}%` }}>
                <span>{`${Reducao}%`}</span>
              </div>
            </div>
          </div>
{/* ASSERT 3 */}
          <div className="assertiveness">
          <h5>Aumento da Produtividade</h5>
            <div className="progressContainer">
              <div className="progressBar">
                <div
                  className="progressBarFill"
                  style={{ width: `${Produtividade}%` }}
                />
              </div>
              <div className="progressBox" style={{ left: `${Produtividade}%` }}>
                <span>{`${Produtividade}%`}</span>
              </div>
            </div>



          </div>


          {/* ASSERT 4*/}
          <div className="assertiveness">
          
            <h5>Economia</h5>
            <div className="progressContainer">
              <div className="progressBar">
                <div
                  className="progressBarFill"
                  style={{ width: `${Economia}%` }}
                />
              </div>
              <div className="progressBox" style={{ left: `${Economia}%` }}>
                <span>{`${Economia}%`}</span>
              </div>
            </div>



          </div>
        </div>

        <div className="image about-img-5">
          <img className='img_img' src={TimelineBG} alt="Foguete impulsionando para cima" />
        
        </div>
      </div>
    </div>

     
      

    </section>
    </>
  )
  }
