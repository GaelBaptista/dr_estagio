
import {BsFillTelephoneFill,BsWhatsapp} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
import {MdEmail} from "react-icons/md"
import {HiDocumentText} from "react-icons/hi"
import {AiFillClockCircle} from "react-icons/ai"
import'./contact.css'




function Contact() {
  const recipientEmail = "comercial@drestagio.com.br";
  const mailtoLink = `mailto:${recipientEmail}`;
  return (
<>
    <section className="contact">
    <div className="containerContact">
      <div className="cardCont" style={ {color: '#ff7417'}}>
      <div className="icon">
     <BsWhatsapp/>
            </div>

     <div className="content">
      <h2>Fale Conosco!</h2>
      <span>Tire suas dúvidas conosco  </span>
      <a href="https://wa.me/message/SUGMGVU6UMJOD1"  target="_blank" rel="noopener noreferrer">Converse conosco</a>
     </div>
    </div>
  </div>


  <div className="containerContact">
      <div className="cardCont" style={ {color: '#ff7417'}}>
      <div className="icon">
     <MdEmail/>
            </div>

     <div className="content">
      <h2>Envie um E-mail!</h2>
      <span>Envie seu e-mail para nossos agentes  </span>
      <a href={mailtoLink}>Enviar E-mail</a>
     </div>
    </div>
  </div>





  <div className="containerContact">
      <div className="cardCont" style={ {color: '#ff7417'}}>
      <div className="icon">
     <HiDocumentText/>
            </div>

     <div className="content">
      <h2>Envie Seu currículo   !</h2>
      <span>Entre para nosso Banco de Dados!  </span>
      <a href="https://drestagio.gupy.io/"  target="_blank" rel="noopener noreferrer">Enviar Currículo</a>
     </div>
    </div>
  </div>
  </section>

{/*========================================================MAPA============================================================== */}
<section className="section-map">
  <div className="section-map--area">
    <div  className="section-map--info">
      <h2>Informações de Contato</h2>
      <div  className="section-map--info-item">
        <div className="section-map--info-item-img" style={{backgroundColor: '#121242'}}  >
          <BsFillTelephoneFill style={{color:'white', fontSize:'24px'}} />
        </div>
        <h3><a   href="https://wa.me/message/SUGMGVU6UMJOD1"  target="_blank" rel="noopener noreferrer"> +55 85 9247-7241</a></h3>
      </div>
      <div className="section-map--info-item">
        <div className="section-map--info-item-img" style={{backgroundColor: '#121242'}}>
          <MdEmail style={{color:'white', fontSize:'24px'}} />
        </div>
        <h3><a href={mailtoLink}> comercial@drestagio.com.br</a></h3>
      </div>
      <div className="section-map--info-item">
        <div className="section-map--info-item-img" style={{backgroundColor: '#121242'}}>
          <ImLocation2 style={{color:'white', fontSize:'24px'}}  />
        </div>
        <h3>
          <a href="https://goo.gl/maps/FooUS2vjtAGKXm6HA"
            target="_blank" rel="noopener noreferrer">
             Av chanceler edson queiroz, R. Rio Novo, 3405, Cascavel - CE, 62850-000
          </a>
        </h3>
      </div>
      <div className="section-map--info-item">
        <div className="section-map--info-item-img"style={{backgroundColor: '#121242'}}>
          <AiFillClockCircle style={{color:'white', fontSize:'24px'}}  />
        </div>
        <h3><a href="#">Atendimento: Seg-Sex / 9:00-17:00</a></h3>
      </div>
    </div>
  </div>
</section>
</>
  );
}

export default Contact;
