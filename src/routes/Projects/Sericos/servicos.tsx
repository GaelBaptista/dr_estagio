import ServicosHome from './assetsServicos/ServicosHome.png'
import './servicos.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselComponent from './Cardservico';



import {BsFillTelephoneFill} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
import {MdEmail} from "react-icons/md"
import moranguinho from './assetsServicos/moranguinho.png'
import anali from './assetsServicos/anali.png'

export function Servicos () {

  const testimonialSlides = [
    {
      quote:
        "Estamos comemorando 20 anos de Supermercado Moranguinho  temos vários funcionários que já foram estagiários, hoje tenho encarregados,  gerentes, lideranças, RHs temos vários funcionários que já foram estagiários e quando esse funcionário de se qualifica e se dedica ele se torna um profissional. O que eu digo pra você estagiário que está começando agora é que se qualifique e se dedique porque hoje todo bom profissional está empregado no mercado de trabalho. ",
      author: "Sr. Albecir Diretor Geral  Supermercado Moranguinho",
      image:moranguinho,
    },
    {
      quote:
        "Olha eu digo sempre que os nossos estagiários são nossos banco de vagas vivos, porque quando a gente recebe currículos eles ficam em uma caixinha ou no e-mail e o meu banco de vagas fica passando aqui na minha frente, então já vejo a competências a técnica  deles e isso ajuda a ter assertividade e hoje trabalhamos com estagiários não para eles serem estagiários e sim para eles crescerem. Hoje trabalhamos no Anali com recrutamento interno e a maior parte da nossa rotatividade são de estagiários que estão sendo promovidos a efetivados.",
      author: "Lidiana Girão DHO Anali Supermercado",
      image: anali,
    },
    {
      quote:
        "Em virtude de nossos estagiário na nossa empresa no grupo moranguinho, hoje valorizamos muito nossos estagiários , quando temos vagas para contratar não buscamos currículos externos, damos oportunidade e priorizamos nossos estagiários que já estão conosco dando a eles oportunidade de assinar a carteira e torna-los efetivos",
      author: "Lucia Alves RH do Supermercado Moranguinho",
      image: moranguinho,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };




  return (
    <main>
      {/* Home */}
      <section className="section" id="home">
        <div className="container grid">
          <div className="image">
            <img src={ServicosHome} rel="preload" alt="Mulher sorrindo penteando outra mulher" />
          </div>
          <div className="text">
            <h2 className="title">Nossos Serviços</h2>
            <p>A <strong> Dr.Estágio </strong>simplifica o processo de contratação de estagiários, permitindo que sua equipe de RH possa focar em outras atividades estratégicas dentro da organização. Nosso programa de estágio visa primordialmente proporcionar aprendizado, assegurando que nossos estagiários alcancem um desempenho profissional notável
               enquanto a empresa contratante colhe os benefícios da legislação de incentivo ao estágio sem lidar com complicações burocráticas.</p>
            <a className="button" target="_blank" href="https://wa.me/message/SUGMGVU6UMJOD1">Fale Conosco</a>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="divider-1"></div>



      {/* Divisor */}
      <div className="divider-2"></div>

      {/* Services */}
    <CarouselComponent/>
   
    
    
       {/* Divisor */}
       <div className="divider-1"></div>

   {/* Testimonials */}
   <section className="section" id="testimonials">
        <div className="container">
          <header>
            <h2 className="title">O que nossos clientes falam</h2>
          </header>
          <div className="testimonials">
            <Slider {...sliderSettings}>
              {testimonialSlides.map((testimonial, index) => (
                <div className="testimonial swiper-slide" key={index}>
                  <blockquote>
                    <p>
                      <span>&ldquo;</span> {testimonial.quote}
                    </p>
                    <cite>
                      <img src={testimonial.image} alt={`Foto de ${testimonial.author}`} />
                      {testimonial.author}
                    </cite>
                  </blockquote>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>


{/* Divisor */}
<div className="divider-2"></div>

{/* Contact */}
<section className="section" id="contact">
  <div className="container grid">
    <div className="text">
      <h2 className="title">Entre em contato com a gente!</h2>
      <p>
A <strong>Dr.Estágio</strong> pode ajudar sua empresa a reduzir custos e oferecer oportunidades de carreira para os talentos em ascensão.</p>
      <a href="https://wa.me/message/SUGMGVU6UMJOD1" target="_blank" className="button"><i className="icon-whatsapp"></i> Entrar em contato</a>
    </div>
    <div className="links">
      <ul className="grid">
        <li><i className="icon-phone"><BsFillTelephoneFill/></i> 85 99247-7241</li>
        <li><i className="icon-map-pin"><ImLocation2/></i> Av chanceler edson queiroz, R. Rio Novo, 3405, Cascavel - CE</li>
        <li><i className="icon-mail"><MdEmail/></i>comercial@drestagio.com.br</li>
      </ul>
    </div>
  </div>
</section>

{/* Divisor */}
<div className="divider-1"></div>
      </main>
  )
}