import "./Fak.css";

export function Fak() {
  return (
    <div className="blog-article-container">
      <header className="header__blog_guia">
        <div className="header-banner_blog">
          <h1>Principais Dúvidas</h1>
        </div>
        <div className="clear_blog"></div>
      </header>

      <section className="content_blog_article">
        <article className="article_blog">
          <h1>O estágio é regulamentado? </h1>
          <br />

          <p>
            Sim. O estágio é regulamentado pela Lei nº 11.788, de 25 de setembro
            de 2008, conhecida como "Lei do Estágio". Essa lei estabelece as
            diretrizes para a realização de estágios no país, visando
            proporcionar aos estudantes uma experiência prática que complemente
            sua formação acadêmica.{" "}
          </p>
          <br />
          <h1>Quem pode ser estagiário? </h1>
          <br />

          <p>
            De acordo com a legislação brasileira, estão aptos a realizar
            estágio os estudantes a partir de 16 anos que estejam devidamente
            matriculados no ensino profissionalizante, médio, educação especial,
            superior e nos anos finais do fundamental – na modalidade
            profissional da educação de jovens e adultos (EJA). Contudo para o
            setor varejista orientamos jovens a partir de 18 anos.
          </p>
          <br />
          <h1>Quem pode contratar estagiários? </h1>
          <br />

          <p>
            Empresas, órgãos públicos (federal, estadual e municipal),
            autarquias, fundações e até profissionais liberais de nível
            superior, devidamente registrados em seus conselhos profissionais.
          </p>
          <br />
        </article>
        {/* <aside className='aside_blog'>
          <img src={logoGupy} alt="Placeholder"/>
          <img src={logoAbres} alt="Placeholder"/>
        </aside> */}
      </section>
    </div>
  );
}
