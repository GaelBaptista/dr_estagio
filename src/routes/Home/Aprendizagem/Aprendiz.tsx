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
A <strong>Dr.Estágio</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi repellendus deleniti facilis, deserunt cupiditate officiis ullam praesentium magni qui neque enim eligendi. Deleniti blanditiis eligendi voluptas mollitia atque nihil id? </p>
        </div>
        <div className='cardrow'>

        
        <div >
          <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-globe"><MdGroups2/></i></span>
            <h3>Alguma coisa</h3>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Alguma coisaAlguma coisaAlguma coisa</p>
            </div>
            <div className='list'>
            <span className='bolinha2'></span>
            <p>Alguma coisaAlguma coisa</p>
            </div>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Alguma coisaAlguma coisa</p>
            </div>
            </div>
        </div>
        
        <div >
          <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-globe"><MdAttachMoney/></i></span>
            <h3>Alguma coisa</h3>
            <div className='list'>
            <span className='bolinha2'></span>
            <p>Alguma coisaAlguma coisa</p>
            </div>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Alguma coisa</p>
            </div>
            <div className='list'>
            <span className='bolinha2'></span>
            <p>Alguma coisaAlguma coisa</p>
            </div>
            </div>
        </div>

        <div >
          <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-globe"><MdGroups2/></i></span>
            <h3>Alguma coisa</h3>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Alguma coisa</p>
            </div>
            <div className='list'>
            <span className='bolinha2'></span>
            <p>Alguma coisaAlguma coisa </p>
            </div>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Alguma coisaAlguma coisaAlguma </p>
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