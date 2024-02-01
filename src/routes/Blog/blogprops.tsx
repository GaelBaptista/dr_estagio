
import Card from './blog.tsx';
import rh from './asset_Blog/rh.jpg'
import cartilha from './PagesBlog/DrConect/assetsBlog/cart.png'
import lei from './PagesBlog/DrConect/assetsBlog/lei.png'
import esg from './PagesBlog/DrConect/assetsBlog/esg.jpg'
import Guia from './asset_Blog/BlogCapaSite_Guia.png'
import Cs from './PagesBlog/EmpresaInovadora/Asset_3cs/BlogCapaSite_3Cs.png'
import Jan_br from './asset_Blog/Jan_brnc.jpg'
import faks from './asset_Blog/perguntas.jpg'
import { IoMdCube, IoMdSchool, IoIosCopy} from 'react-icons/io';
import { MdRecycling } from 'react-icons/md';
import {GiBrain } from 'react-icons/gi'
import {RiGuideFill} from 'react-icons/ri'
import {PiDotsThreeOutlineVerticalFill} from 'react-icons/pi'
import { LiaQuestionSolid } from "react-icons/lia";

const cardsData = [
  {
    imgSrc: rh,
    date: { day: '01', month: 'Jan' },
    title: 'Planner para o RH em 2024',
    text: "Mudanças que impactam su rotina.",
    icon: IoMdCube, 
    saibaMaisLink: 'https://drive.google.com/file/d/1PS4Egtj6RtO3U5pKzEzHUg6SQ59IRjhc/view?usp=sharing',
  },
  {
    imgSrc: Jan_br,
    date: { day: '02', month: 'Jan' },
    title: 'Janeiro Branco',
    text: "Janeiro Branco: um convite para refletirmos sobre a importância da saúde mental e emocional em nossas vidas.",
    icon: GiBrain, 
    saibaMaisLink: 'https://drive.google.com/file/d/1_K7D6npdZy2qqmbIWtLLwiihkwMva-Tz/view?usp=sharing', 
  },
  {
    imgSrc: cartilha,
    date: { day: '28', month: 'Set' },
    title: 'Cartilha Lei do Estágio',
    text: 'Esclarecendo a lei do estágio.',
    icon: IoMdSchool, 
    saibaMaisLink: 'https://drive.google.com/file/d/1hJqoBw--1dlYxmeUa4-IBMRParAbkhQC/view?usp=sharing', 
  },
  {
    imgSrc: faks ,
    date: { day: '30', month: 'Jan' },
    title: 'Dúvidas mais frequentes ',
    text: "O estágio é regulamentado?  Quem pode ser estagiário?  Clique em saiba mais para resposnder a essas dúvidas. ",
    icon: LiaQuestionSolid, // Substituir  elo nome do ícone que quero
    saibaMaisLink: '/fak', 
  },
  {
    imgSrc: lei ,
    date: { day: '28', month: 'Set' },
    title: 'Lei do Estágio',
    text: "O estágio visa o aprendizado de competências próprias da atividade profissional...",
    icon: IoIosCopy, // Substituir  elo nome do ícone que quero
    saibaMaisLink: 'https://drive.google.com/file/d/176xvHWerdsA2GiqvWuBV-JUXFbbXSuZv/view?usp=sharing', 
  },
  
  {
    imgSrc: esg ,
    date: { day: '30', month: 'Ago' },
    title: 'ESG no Estágio',
    text: "Recentemente, o termo ESG ganhou destaque devido à crescente preocupação do mercado financeiro com a sustentabilidade.",
    icon: MdRecycling,
    saibaMaisLink: '/esg', 
  },
  //  {
  //   imgSrc: concet ,
  //   date: { day: '25', month: 'jul' },
  //   title: 'Dr.Estágio Connect',
  //   text: "Estágio: impulsionando o desenvolvimento das empresas.",
  //   icon: GiNewspaper, 
  //   saibaMaisLink: '/DrConect', 
  // }, 
  
  {
    imgSrc:Guia ,
    date: { day: '24', month: 'Out' },
    title: 'Guia Rápido para Estagiários ',
    text: "Navegando com Sucesso no Mundo Profissional. O estágio é um passo crucial para iniciar sua jornada profissional.",
    icon: RiGuideFill, 
    saibaMaisLink: '/GuiadoEstagiario', 
  },
  {
    imgSrc:Cs,
    date: { day: '24', month: 'Out' },
    title: "Os 3 C's de uma Empresa Inovadora",
    text: "Cultura, Colaboração e Criatividade. No mundo empresarial dinâmico e competitivo de hoje, a inovação não é apenas uma vantagem, é uma necessidade.",
    icon: PiDotsThreeOutlineVerticalFill, 
    saibaMaisLink: '/3csEmpresaInovadora', 
  },
  
];

export function Blog() {
  return (
    <section className='grid-blog-container '>
      
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </section>
  );
}


