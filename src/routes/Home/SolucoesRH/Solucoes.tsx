import { GiMagnifyingGlass } from 'react-icons/gi'
import './solucoes.css'
import {  MdRocketLaunch} from 'react-icons/md'

export function Solucoes_Section () {
  return (
    <>
   <section className='slocoesHome'>

    <div className="containerCard_solucoes">
      <div className="rowCard_solucoes">
        <div className="section-head ">
          <h4><span>Soluções</span>RH</h4>
          <div className='divider__title'>
            
          <span className="hr-line"><span><span></span></span></span>
          
          </div>
          <p>
A <strong>Dr.Estágio</strong> destaca-se por oferecer serviços especializados que impulsionam a gestão de recursos humanos. Nosso foco principal abrange dois pilares essenciais.</p>
        </div>
        <div className='cardrow_solucoes'>

        
        <div >
          <div className="item_solucoes"> <span className="icon feature_box_col_one"><i className="fa fa-globe"><GiMagnifyingGlass/></i></span>
            <h3>Recrutamento e Seleção</h3>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Processos Seletivos Eficientes</p>
            </div>
            <div className='list'>
            <span className='bolinha2'></span>
            <p>Alinhamento Cultural</p>
            </div>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Contribuição para o Crescimento Sustentável</p>
            </div>
            </div>
        </div>
        
        <div >
          <div className="item_solucoes"> <span className="icon feature_box_col_one"><i className="fa fa-globe"><MdRocketLaunch/></i></span>
            <h3>Palestras e Treinamento</h3>
            <div className='list'>
            <span className='bolinha2'></span>
            <p>Desenvolvimento Contínuo</p>
            </div>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Programas Customizados</p>
            </div>
            <div className='list'>
            <span className='bolinha2'></span>
            <p>Potencialização do Talento</p>
            </div>
            </div>
        </div>

      
        </div>
      </div>
    </div>
 

  </section>
  

    </>
  )

}