import './Guia.css'
import img_body from './asset_Guia/imgBody___Blog.png'



export function GuiaBlog() {
    return (
    <div className='blog-article-container'>
      <header className='header__blog_guia'>
        <div className="header-banner_blog">
          <h1>Guia Rápido para Estagiários</h1>
        </div>
        <div className="clear_blog"></div>
        
      </header>

      <section className="content_blog_article">
        <article className='article_blog'>
          <p>O estágio é um passo crucial para iniciar sua jornada profissional. É uma oportunidade única para aprender, crescer e desenvolver habilidades essenciais para o seu futuro. Este guia rápido foi criado para ajudá-lo a aproveitar ao máximo sua experiência de estágio, proporcionando dicas valiosas para navegar com sucesso no mundo profissional.</p>
          <br />
          <p><img src={img_body} alt="Placeholder"  loading="lazy"
      decoding="async"/></p>
          <br />
          
          
          <h1>1. Seja Proativo</h1>
          <br />
          
          <p>Demonstre iniciativa, esteja sempre disposto a aprender e a assumir responsabilidades extras. Proatividade é uma qualidade altamente valorizada no ambiente de trabalho e pode abrir portas para oportunidades futuras. </p>
          <br />
            <h1>2. Comunique-se Efetivamente</h1>
          <br />
          
          <p>A comunicação é fundamental. Pratique habilidades de comunicação verbal e escrita. Esteja atento às instruções, faça perguntas quando necessário e esteja disposto a receber feedback construtivo.</p>
          <br />
          <h1>3. Construa Relacionamentos Profissionais</h1>
          <br />
          
          <p>Networking é uma parte essencial da vida profissional. Conheça seus colegas de trabalho, supervisores e outros profissionais da empresa. Cultive relacionamentos autênticos, pois eles podem ser benéficos ao longo de sua carreira.
</p>
            <br />
          <h1>4. Gerencie Seu Tempo</h1>
          <br />
          
          <p>Aprenda a priorizar tarefas e gerenciar seu tempo de forma eficaz. Utilize ferramentas como listas de afazeres e calendários para manter-se organizado. Cumprir prazos é crucial no mundo profissional.</p>
          <br />
          <h1>5. Seja Adaptável e Flexível</h1>
          <br />
          
          <p>O ambiente de trabalho está sempre mudando. Esteja preparado para se adaptar a novas situações, aprender novas habilidades e enfrentar desafios de maneira positiva. A flexibilidade é uma qualidade valiosa. </p>
          <br />
          <h1>6. Vista-se Adequadamente e Mantenha uma Postura Profissional</h1>
          <br />
          
          <p>A aparência e a postura profissional são importantes. Vista-se de forma adequada ao código de vestimenta da empresa e mantenha uma postura confiante e respeitosa. </p>
          <br />
          <h1>7. Aprenda com os Erros</h1>
          <br />
          
          <p>Ninguém é perfeito. Se cometer um erro, veja-o como uma oportunidade de aprendizado. Assuma a responsabilidade, aprenda com a experiência e evite repetir os mesmos erros no futuro. </p>
          <br />
          <h1>8. Peça Ajuda Quando Necessário</h1>
          <br />
          
          <p>Não tenha medo de pedir ajuda se estiver inseguro sobre uma tarefa. É melhor esclarecer dúvidas do que fazer algo errado por falta de compreensão. Seus colegas de trabalho e supervisores estão lá para apoiá-lo.</p>
          <br />
          <h1>9. Demonstre Gratidão e Apreço</h1>
          <br />
          
          <p>Mostre gratidão pelas oportunidades e pelo aprendizado que você está recebendo durante o estágio. Um simples "obrigado" pode fazer uma grande diferença e criar um ambiente de trabalho positivo.</p>
          <br />
          
      
          
          <p>Lembre-se, seu estágio é mais do que apenas uma posição temporária. É uma chance de aprender, crescer e construir as bases para sua carreira futura. Ao ser proativo, comunicativo, flexível e grato, você não apenas terá um estágio bem-sucedido, mas também estará se preparando para um futuro profissional brilhante. Boa sorte!</p>
          
          
          
        </article>
        {/* <aside className='aside_blog'>
          <img src={logoGupy} alt="Placeholder"/>
          <img src={logoAbres} alt="Placeholder"/>
        </aside> */}
      </section>
    </div>
  );
}
