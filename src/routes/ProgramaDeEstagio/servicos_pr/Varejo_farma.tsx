
import './Varejo_farma.css'
import img_Varejo from '../assetsPr/Paralax-three.png'
import img_Farmacia from '../assetsPr/Paralax-one-Far.png'

export function Varejo_Farmacia () {
  return (
    
    <>
       <section className="section" id="home">
      <div className="container_estag grid_estag">
      <div className="text">
          <h2 className="title">Programa de Estágio no <strong>Varejo</strong> </h2>
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
      <div className="container_estag grid_estag">
        <div className="image_estag">
          <img src={img_Farmacia} alt="3 mulheres sorrinfo"/>
        </div>
        <div className="text">
          <h2 className="title">Programa de Estágio em <strong > Farmácia</strong></h2>
          <p>O estágio no setor de farmácia proporciona aos estudantes a chance de aplicar conhecimentos teóricos em atividades como atendimento ao cliente, organização e operação de caixa. 
          Destaques têm a oportunidade de serem contratados integralmente, reduzindo custos de recrutamento e reforçando o compromisso da empresa com o desenvolvimento dos talentos emergentes
          </p>
         
         
        </div>
      </div>
    </section>
    <div className="divider-2"></div>



  </>
  )
}