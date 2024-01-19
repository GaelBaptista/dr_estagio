
import './DrConect.css'
import AbresBLog from './assetsBlog/1.png'
import logoGupy from './assetsBlog/lgu.jpg'
import logoAbres from './assetsBlog/lab.png'


export function DrConect() {
    return (
    <div className='blog-article-container'>
      <header className='header__blog'>
        <div className="header-banner_blog">
          <h1>Dr.Estágio e ABRES</h1>
        </div>
        <div className="clear_blog"></div>
        
      </header>

      <section className="content_blog_article">
        <article className='article_blog'>
          <p>A Drestágio agora é associada da ABRES, especializada em estágios e programas de desenvolvimento profissional. Com uma reputação sólida e compromisso em fornecer soluções eficientes, oferecemos às empresas a confiança de recrutar estagiários talentosos, com suporte contínuo ao longo do processo. Nossa parceria com a ABRES garante qualidade, transparência e comprometimento, impulsionando o crescimento e o sucesso dos negócios por meio de soluções de estágio confiáveis.</p>
          <br />
          <p><img src={AbresBLog} alt="Placeholder"  loading="lazy"
      decoding="async"/></p>
          <br />
          <p>Dr.Estágio está integrando a plataforma Gupy, plataforma de recrutamento e seleção. Essa integração otimiza processos de recrutamento de estagiários, utilizando inteligência artificial, automação e uma interface intuitiva. Combinando expertise da Dr.Estágio com a tecnologia da Gupy, oferecemos soluções eficientes para atrair, avaliar e contratar os melhores talentos, impulsionando o crescimento e o sucesso das empresas.</p>
          <br />
          
          <h1>Chegamos em Rio Grande do Norte</h1>
          <br />
          
          <p>Chegamos ao Rio Grande do Norte, um lugar de paisagens deslumbrantes e pessoas acolhedoras. Tivemos o privilégio de conhecer profissionais inspiradores, visitar empresas engajadas e visionárias, expandindo nosso conhecimento e vislumbrando um futuro promissor. </p>
          
        </article>
        <aside className='aside_blog'>
          <img src={logoGupy} alt="Placeholder"/>
          <img src={logoAbres} alt="Placeholder"/>
        </aside>
      </section>
    </div>
  );
}


