
import { Link } from 'react-router-dom';
import './blog.css'

import  { useState } from 'react';
import { IconType } from 'react-icons/lib';

interface CardProps {
  imgSrc: string;
  date: { day: string; month: string };
  title: string ;
  text: string;
  icon: IconType; // Adicione a propriedade 'icon' à interface
  saibaMaisLink: string ; // Adicione a propriedade 'saibaMaisLink' à interface
}

function Card({ imgSrc, date, title, text, icon: Icon, saibaMaisLink }: CardProps) {
  const [hovered, setHovered] = useState(false);

  return (
  
    <figure className={`snip1208${hovered ? ' hover' : ''}`} onMouseLeave={() => setHovered(false)}>
      <img src={imgSrc} alt="sample" />
      <div className="date">
        <span className="day">{date.day}</span>
        <span className="month">{date.month}</span>
      </div>
      <i className="ion-film-marker"><Icon/></i>
      <figcaption>
        <h3>{title}</h3>
        <p>{text}</p>
        <button>Saiba Mais</button>
      </figcaption>
     <Link to={saibaMaisLink}  rel="noopener noreferrer"></Link>
    </figure>
   
  );
}

export default Card;



