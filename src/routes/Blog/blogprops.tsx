
import Card from './blog.tsx';
import rh from './PagesBlog/DrConect/assetsBlog/rh.jpg'
import cartilha from './PagesBlog/DrConect/assetsBlog/cart.png'
import lei from './PagesBlog/DrConect/assetsBlog/lei.png'
import esg from './PagesBlog/DrConect/assetsBlog/esg.jpg'
import concet from './PagesBlog/DrConect/assetsBlog/blogconect.png'
import Guia from './asset_Blog/BlogCapaSite_Guia.png'
import Cs from './PagesBlog/EmpresaInovadora/Asset_3cs/BlogCapaSite_3Cs.png'

import { IoMdCube, IoMdSchool, IoIosCopy} from 'react-icons/io';
import { MdRecycling } from 'react-icons/md';
import { GiNewspaper } from 'react-icons/gi'
import {RiGuideFill} from 'react-icons/ri'
import {PiDotsThreeOutlineVerticalFill} from 'react-icons/pi'


const cardsData = [
  {
    imgSrc: rh,
    date: { day: '01', month: 'Jan' },
    title: 'Planner para o RH em 2024',
    text: "Mudanças que impactam su rotina.",
    icon: IoMdCube, // Substitua 'FaIconName1' pelo nome do ícone que você deseja usar
    saibaMaisLink: 'https://drive.google.com/file/d/1j0YsaYOoO_e6Xt1DszoVM0cjoiZFlZkE/view?usp=sharing', // Substitua '/link1' pelo link desejado
  },
  {
    imgSrc: cartilha,
    date: { day: '28', month: 'Set' },
    title: 'Cartilha Lei do Estágio',
    text: 'Esclarecendo a lei do estágio',
    icon: IoMdSchool, // Substitua 'FaIconName1' pelo nome do ícone que você deseja usar
    saibaMaisLink: 'https://drive.google.com/file/d/1hJqoBw--1dlYxmeUa4-IBMRParAbkhQC/view?usp=sharing', // Substitua '/link1' pelo link desejado
  },
  {
    imgSrc: lei ,
    date: { day: '28', month: 'Set' },
    title: 'Lei do Estágio',
    text: "O estágio visa o aprendizado de competências próprias da atividade profissional...",
    icon: IoIosCopy, // Substitua 'FaIconName1' pelo nome do ícone que você deseja usar
    saibaMaisLink: 'https://drive.google.com/file/d/176xvHWerdsA2GiqvWuBV-JUXFbbXSuZv/view?usp=sharing', // Substitua '/link1' pelo link desejado
  },
  
  {
    imgSrc: esg ,
    date: { day: '30', month: 'Ago' },
    title: 'ESG no Estágio',
    text: "Recentemente, o termo ESG ganhou destaque devido à crescente preocupação do mercado financeiro com a sustentabilidade.",
    icon: MdRecycling, // Substitua 'FaIconName1' pelo nome do ícone que você deseja usar
    saibaMaisLink: '/esg', // Substitua '/link1' pelo link desejado
  }, {
    imgSrc: concet ,
    date: { day: '25', month: 'jul' },
    title: 'Dr.Estágio Connect',
    text: "Estágio: impulsionando o desenvolvimento das empresas.",
    icon: GiNewspaper, // Substitua 'FaIconName1' pelo nome do ícone que você deseja usar
    saibaMaisLink: '/DrConect', // Substitua '/link1' pelo link desejado
  },
  {
    imgSrc:Guia ,
    date: { day: '24', month: 'Out' },
    title: 'Guia Rápido para Estagiários ',
    text: "Navegando com Sucesso no Mundo Profissional. O estágio é um passo crucial para iniciar sua jornada profissional.",
    icon: RiGuideFill, // Substitua 'FaIconName1' pelo nome do ícone que você deseja usar
    saibaMaisLink: '/GuiadoEstagiario', // Substitua '/link1' pelo link desejado
  },
  {
    imgSrc:Cs,
    date: { day: '24', month: 'Out' },
    title: "Os 3 C's de uma Empresa Inovadora",
    text: "Cultura, Colaboração e Criatividade. No mundo empresarial dinâmico e competitivo de hoje, a inovação não é apenas uma vantagem, é uma necessidade.",
    icon: PiDotsThreeOutlineVerticalFill, // Substitua 'FaIconName1' pelo nome do ícone que você deseja usar
    saibaMaisLink: '/3csEmpresaInovadora', // Substitua '/link1' pelo link desejado
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


