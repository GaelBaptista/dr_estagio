
import Card from './blog.tsx';
import rh from './assetsBlog/rh.jpg'
import cartilha from './assetsBlog/cart.png'
import lei from './assetsBlog/lei.png'
import esg from './assetsBlog/esg.jpg'

import { IoMdCube, IoMdSchool, IoIosCopy} from 'react-icons/io';
import { MdRecycling } from 'react-icons/md';





const cardsData = [
  {
    imgSrc: rh,
    date: { day: '01', month: 'Jan' },
    title: 'Legislação para o RH em 2023',
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
    saibaMaisLink: 'https://drestagio.netlify.app/esg', // Substitua '/link1' pelo link desejado
  }, {
    imgSrc: esg ,
    date: { day: '30', month: 'Ago' },
    title: 'ESG no Estágio',
    text: "Recentemente, o termo ESG ganhou destaque devido à crescente preocupação do mercado financeiro com a sustentabilidade.",
    icon: MdRecycling, // Substitua 'FaIconName1' pelo nome do ícone que você deseja usar
    saibaMaisLink: 'https://drestagio.netlify.app/teste', // Substitua '/link1' pelo link desejado
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


