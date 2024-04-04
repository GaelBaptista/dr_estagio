
import './Card_testimo.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




import moranguinho from './assetsServicos/moranguinho.png'
import anali from './assetsServicos/anali.png'

export function Testimonials_ () {

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
  
    
<>
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

      </>
  )
}