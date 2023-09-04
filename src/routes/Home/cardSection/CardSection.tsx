import './cardSection.css'
import { MdGroups2, MdAttachMoney, } from 'react-icons/md'

export function CardSection () {
  return (
   <section className='cardHome'>

    <div className="containerCard">
      <div className="rowCard">
        <div className="section-head ">
          <h4><span>Programa de </span> Estágio</h4>
          <p>
A <strong>Dr.Estágio</strong> simplifica o processo de contratação de estagiários, permitindo que sua equipe de 
DHO possam focar em outras atividades estratégicas dentro da organização e asseguramos todas as exigências 
da Lei 11.788/2008.  </p>
        </div>
        <div className='cardrow'>

        
        <div >
          <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-globe"><MdGroups2/></i></span>
            <h3>Gestão de DH</h3>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Treinar novos Talentos</p>
            </div>
            <div className='list'>
            <span className='bolinha2'></span>
            <p>Estimular o conhecimento</p>
            </div>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Desenvolver profissionais</p>
            </div>
            </div>
        </div>
        
        <div >
          <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-globe"><MdAttachMoney/></i></span>
            <h3>Mais Economia</h3>
            <div className='list'>
            <span className='bolinha2'></span>
            <p>Sem vínculo empregatício</p>
            </div>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Redução de encargos</p>
            </div>
            <div className='list'>
            <span className='bolinha2'></span>
            <p>Sem burocracia</p>
            </div>
            </div>
        </div>

        <div >
          <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-globe"><MdGroups2/></i></span>
            <h3>Gestão de RH</h3>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Contratação Assertiva</p>
            </div>
            <div className='list'>
            <span className='bolinha2'></span>
            <p>Análise de habilidades e competências </p>
            </div>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Banco de Talento qualificado</p>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
 

  </section>

  )

}