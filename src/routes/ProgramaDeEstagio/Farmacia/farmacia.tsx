import CarouselComponent from '../servicos_pr/Cardservico'
import { Testimonials_ } from '../servicos_pr/testimonials'
import './farmacia.css'
import img_Varejo from '../assetsPr/Paralax-three.png'
export function Farmacia () {
  return (
    
    <>
       <section className="section" id="home">
      <div className="container grid">
      <div className="text">
          <h2 className="title">Programa de Estágio no Varejo</h2>
          <p>O estágio no varejo oferece aos estudantes a oportunidade de aplicar conhecimentos teóricos na prática, contribuindo para áreas como atendimento ao cliente, reposição e operação de caixa. Destaques têm a chance de serem contratados integralmente, reduzindo custos de recrutamento e evidenciando o compromisso da empresa com o desenvolvimento profissional.</p>
         
        </div>
        <div className="image_estag">
          <img src={img_Varejo} alt="Mulher sorrindo penteando outra mulher"/>
        </div>
       
      </div>
    </section>

    {/* <!-- Divisor --> */}
    <div className="divider-1"></div>

    {/* <!-- About --> */}
    <section className="section" id="about">
      <div className="container grid">
        <div className="image_estag">
          <img src="assets/images/about.jpg" alt="3 mulheres sorrinfo"/>
        </div>
        <div className="text">
          <h2 className="title">Sobre nós</h2>
          <p>Beauty Salon é um novo conceito de salão: um espaço aconchegante, alternativo, com uma postura ética,
            onde se utilizam produtos que respeitam sua saúde
            e a natureza.
          </p>
          <br/>
          <p>Um salão super slow beauty, com atendimento individualizado, ambiente muito calmo e com
            muito papo-cabeça.</p>
          <br/>
          <p>Imagem aqui não é tratada com futilidade. Se sentir bem faz parte da autoestima, e a imagem de cada um de
            nós transmite uma mensagem. Essa mensagem deve estar de acordo com o que somos, deve nos representar.</p>
        </div>
      </div>
    </section>



  </>
  )
}