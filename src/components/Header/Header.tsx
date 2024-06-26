import './style.css'
import Logo from '../../assests/Logo1.png'
import { FaComments, FaClock, FaEnvelope } from 'react-icons/fa';
export function Header () {
  const recipientEmail = "comercial@drestagio.com.br";
  const mailtoLink = `mailto:${recipientEmail}`;
  return (
    <div className="Header">
    <div className="logo">
      <img src={Logo} alt="Logo" className="logoimg" loading="lazy"
      decoding="async" />
    </div>

    <div className="menu">
      <div className="info">
        <div className="info-item">
          <FaComments className="icon" style={{ color: '#F75C25', fontSize: '1.5rem' }} />
          <div className="info-content">
            <p className="info-title">Fale conosco</p>
            
            <p className="info-details"><a href="https://wa.me/message/SUGMGVU6UMJOD1">(85) 99247-7241</a></p> {/* Substitua pelo número desejado */}
          </div>
        </div>
        <div className="info-item">
          <FaClock className="icon" style={{ color: '#F75C25', fontSize: '1.5rem' }} />
          <div className="info-content">
            <p className="info-title">Atendimento de Seg-Sex</p>
            <p className="info-details"><a href="">9:00-17:00</a></p>
          </div>
        </div>
        <div className="info-item">
          <FaEnvelope className="icon" style={{color: '#F75C25', fontSize: '1.5rem' }} />
          <div className="info-content">
            <p className="info-title">Mande um Email</p>
            <p className="info-details"><a href={mailtoLink}>comercial@drestagio.com</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}