import './Aprendiz.css'
import { MdGroups2, MdAttachMoney, } from 'react-icons/md'

export function Aprendiz () {
  return (
    <>
   <section className='cardHome'>

    <div className="containerCard">
      <div className="rowCard">
        <div className="section-head ">
          <h4><span>Programa de</span>Aprendizagem</h4>
          <div className='divider__title'>
            
          <span className="hr-line"><span><span></span></span></span>
          
          </div>
          <p>
 Nosso Programa de Aprendizagem tem como objetivo promover o desenvolvimento profissional dos jovens, seguindo a Lei da Aprendizagem. </p>
        </div>
        <div className='cardrow_ap'>

        
        <div >
          <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-globe"><MdGroups2/></i></span>
            <h3>Incentivos Fiscais e Tributários </h3>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Redução de Encargos</p>
            </div>
            <div className='list'>
            <span className='bolinha2'></span>
            <p>Incentivo Fiscal</p>
            </div>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Simplificação Administrativa</p>
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