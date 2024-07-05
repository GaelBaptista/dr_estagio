

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./vagas.css";
import { useState } from "react";


// interface Vaga {
//   id: number;
//   titulo: string;
//   descricao?: string;
//   cidade: string;
//   tipoContrato: string;
//   link: string;
//   // outras propriedades da vaga, se tiver
// }

export function Vagas() {
  const sliderSettingsVagas = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const [filtroCidade, setFiltroCidade] = useState<string>("");
  // const [mostrarVagas, setMostrarVagas] = useState(false);
  // const [vagasFiltradas, setVagasFiltradas] = useState<Vaga[]>([]);
  // const [mostrarMensagem, setMostrarMensagem] = useState(false);
  // const [mostrarMensagemSemVagas, setMostrarMensagemSemVagas] = useState(false);

  // const [vagasData, setVagasData] = useState<Vaga[]>([
  //   {
  //     id: 1,
  //     titulo: "VAGA AUXILIAR DE COMÉRCIO E VAREJO",
  //     cidade: "PLANALTO AYRTON SENNA, FORTALEZA",
  //     tipoContrato: "ESTÁGIO",
  //     descricao: "Descrição da vaga de vendedor.",
  //     link: "https://drestagio.gupy.io/jobs/5355782?jobBoardSource=gupy_public_page",
  //   },
  //   {
  //     id: 2,
  //     titulo: "VAGA AUXILIAR ADMINISTRATIVO",
  //     cidade: " FORTALEZA",
  //     tipoContrato: "ESTÁGIO",
  //     descricao: "Descrição da vaga de vendedor.",
  //     link: "https://drestagio.gupy.io/",
  //   },
  //   {
  //     id: 3,
  //     titulo: "VAGA AUXILIAR DE COMÉRCIO E VAREJO",
  //     cidade: "JÓQUEI CLUBE , FORTALEZA",
  //     tipoContrato: "ESTÁGIO",
  //     descricao: "Descrição da vaga de vendedor.",
  //     link: "https://drestagio.gupy.io/jobs/5121028?jobBoardSource=gupy_public_page",
  //   },
  //   {
  //     id: 4,
  //     titulo: "VAGA AUXILIAR DE COMÉRCIO E VAREJO",
  //     cidade: "RODOLFO TEÓFILO, FORTALEZA",
  //     tipoContrato: "ESTÁGIO",
  //     descricao: "", // ou null, se não houver descrição
  //     link: "https://drestagio.gupy.io/jobs/5508610?jobBoardSource=gupy_public_page",
  //   },
  //   {
  //     id: 5,
  //     titulo: "VAGA AUXILIAR ADMINISTRATIVO",
  //     cidade: "JABUTI, EUSÉBIO",
  //     tipoContrato: "ESTÁGIO",
  //     descricao: "", // ou null, se não houver descrição
  //     link: "https://drestagio.gupy.io/jobs/5358038?jobBoardSource=gupy_public_page",
  //   },
  //   {
  //     id: 6,
  //     titulo: "VAGA AUXILIAR DE COMÉRCIO E VAREJO",
  //     cidade: "MORADA NOVA",
  //     tipoContrato: "ESTÁGIO",
  //     descricao: "", // ou null, se não houver descrição
  //     link: "https://drestagio.gupy.io/jobs/5538298?jobBoardSource=gupy_public_page",
  //   },
  //   {
  //     id: 7,
  //     titulo: "VAGA AUXILIAR DE COMÉRCIO E VAREJO",
  //     cidade: "EDSON QUEIROZ, FORTALEZA",
  //     tipoContrato: "ESTÁGIO",
  //     descricao: "", // ou null, se não houver descrição
  //     link: "https://drestagio.gupy.io/jobs/5139889?jobBoardSource=gupy_public_page",
  //   },
  //   {
  //     id: 8,
  //     titulo: "VAGA AUXILIAR DE COMÉRCIO E VAREJO",
  //     cidade: "CURIÓ / LAGOA REDONDA , FORTALEZA",
  //     tipoContrato: "ESTÁGIO",
  //     descricao: "", // ou null, se não houver descrição
  //     link: "https://drestagio.gupy.io/jobs/5722709?jobBoardSource=gupy_public_page",
  //   },
  //   {
  //     id: 9,
  //     titulo: "VAGA AUXILIAR DE COMÉRCIO E VAREJO",
  //     cidade: " AMONTADA",
  //     tipoContrato: "ESTÁGIO",
  //     descricao: "", // ou null, se não houver descrição
  //     link: "https://drestagio.gupy.io/jobs/5378461?jobBoardSource=gupy_public_page",
  //   },
  //   {
  //     id: 10,
  //     titulo: "VAGA AUXILIAR DE COMÉRCIO E VAREJO",
  //     cidade: "JOSÉ WALTER , FORTALEZA",
  //     tipoContrato: "ESTÁGIO",
  //     descricao: "", // ou null, se não houver descrição
  //     link: "https://drestagio.gupy.io/jobs/5355753?jobBoardSource=gupy_public_page",
  //   },
  //   {
  //     id: 11,
  //     titulo: "VAGA AUXILIAR DE COMÉRCIO E VAREJO",
  //     cidade: "JOÃO XXIII , FORTALEZA",
  //     tipoContrato: "ESTÁGIO",
  //     descricao: "", // ou null, se não houver descrição
  //     link: "https://drestagio.gupy.io/jobs/5355998?jobBoardSource=gupy_public_page",
  //   },
  //   {
  //     id: 12,
  //     titulo: "VAGA AUXILIAR DE COMÉRCIO E VAREJO",
  //     cidade: "QUINTINO CUNHA , FORTALEZA",
  //     tipoContrato: "ESTÁGIO",
  //     descricao: "", // ou null, se não houver descrição
  //     link: "https://drestagio.gupy.io/jobs/5355647?jobBoardSource=gupy_public_page",
  //   },
  //   {
  //     id: 13,
  //     titulo: "VAGA MARKETING",
  //     cidade: "JACARECANGA , FORTALEZA",
  //     tipoContrato: "ESTÁGIO SUPERIOR",
  //     descricao: "", // ou null, se não houver descrição
  //     link: "https://drestagio.gupy.io/jobs/5358001?jobBoardSource=gupy_public_page",
  //   },
  //   {
  //     id: 14,
  //     titulo: "VAGA SEGURANÇA DO TRABALHO ",
  //     cidade: "JABUTI , EUSÉBIO",
  //     tipoContrato: "ESTÁGIO",
  //     descricao: "", // ou null, se não houver descrição
  //     link: "https://drestagio.gupy.io/jobs/5355693?jobBoardSource=gupy_public_page",
  //   },
  //   {
  //     id: 15,
  //     titulo: "VAGA MARKETING",
  //     cidade: "RUSSAS - CE",
  //     tipoContrato: "ESTÁGIO SUPERIOR",
  //     descricao: "", // ou null, se não houver descrição
  //     link: "https://drestagio.gupy.io/jobs/5672484?jobBoardSource=gupy_public_page",
  //   },
  //   {
  //     id: 16,
  //     titulo: "VAGA AUXILIAR DE COMÉRCIO E VAREJO",
  //     cidade: "MOSSORÓ , RIO GRANDE DO NORTE",
  //     tipoContrato: "ESTÁGIO",
  //     descricao: "", // ou null, se não houver descrição
  //     link: "https://drestagio.gupy.io/jobs/5126307?jobBoardSource=gupy_public_page",
  //   },
  //   {
  //     id: 17,
  //     titulo: "VAGA AUXILIAR DE COMÉRCIO E VAREJO",
  //     cidade: "MARACANAÚ",
  //     tipoContrato: "ESTÁGIO",
  //     descricao: "", // ou null, se não houver descrição
  //     link: "https://drestagio.gupy.io/jobs/5126984?jobBoardSource=gupy_public_page",
  //   },
  //   {
  //     id: 18,
  //     titulo: "VAGA AUXILIAR DE COMÉRCIO E VAREJO",
  //     cidade: "ITAPIPOCA",
  //     tipoContrato: "ESTÁGIO",
  //     descricao: "", // ou null, se não houver descrição
  //     link: "https://drestagio.gupy.io/jobs/5309551?jobBoardSource=gupy_public_page",
  //   },
  //   {
  //     id: 19,
  //     titulo: "VAGA AUXILIAR DE COMÉRCIO E VAREJO",
  //     cidade: "NATAL, RIO GRANDE DO NORTE",
  //     tipoContrato: "ESTÁGIO",
  //     descricao: "", // ou null, se não houver descrição
  //     link: "https://drestagio.gupy.io/jobs/5131899?jobBoardSource=gupy_public_page",
  //   },
  // ]);
  // useEffect(() => {
    
  //   fetch("https://api.exemplo.com/vagas")
  //     .then((response) => response.json())
  //     .then((data) => setVagasData(data));
  // }, []);
  // const handleFiltrarVagas = () => {
  //   if (filtroCidade === "") {
  //     // Se o campo de entrada estiver vazio, mostrar mensagem de erro e impedi a exibição das vagas
  //     setMostrarMensagem(true);
  //     setTimeout(() => {
  //       setMostrarMensagem(false);
  //     }, 1500); // Esconde a mensagem após 1,5 segundos
  //     setMostrarVagas(false); // Oculta as vagas
  //     setMostrarMensagemSemVagas(false); // Oculta a mensagem não há vags
  //     return;
  //   }

  //   const vagasFiltradas: Vaga[] = vagasData.filter((vaga: Vaga) =>
  //     vaga.cidade.toLowerCase().includes(filtroCidade.toLowerCase())
  //   );
  //   if (vagasFiltradas.length === 0) {
  //     // Se não houver vagas correspondentes à cidade, mostrar mensagem não há vafgas
  //     setMostrarMensagemSemVagas(true);
  //     setMostrarVagas(false); // Oculta as vagas
  //   } else {
  //     // Se houver vagas pro qe foi digitado, exibir as vagas e ocultar a mensagem nao há vagas
  //     setVagasFiltradas(vagasFiltradas);
  //     setMostrarVagas(true);
  //     setMostrarMensagemSemVagas(false);
  //   }

  //   setMostrarMensagem(false);
  // };

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const textoFiltrado = e.target.value;
  //   setFiltroCidade(textoFiltrado);

  //   // Se o campo de entrada estiver vazio, oculta as vagas e a mensagem de erro
  //   if (textoFiltrado === "") {
  //     setMostrarVagas(false);
  //     setMostrarMensagem(false);
  //   }
  // };

  return (
    <>
      <section className="sectionVaga">
        <div>
          <span>Encontre</span>
          <h1>Vagas de Estágio</h1>
          <hr />
          <p>
            Somos uma agência de integração empresa-escola especializada em
            estágios não obrigatórios. Em parceria com instituições de ensino,
            desenvolvemos um programa de estágio para atender às necessidades de
            empresas em busca de novos talentos, proporcionando oportunidades
            valiosas para jovens ingressarem no mercado de trabalho ou se
            recolocarem profissionalmente.
          </p>
          <a
          
            href="https://drestagio.gupy.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ache Vagas
          </a>
        </div>

        <div
          className="slider-container"
          style={{ width: "40%", margin: "0 auto" }}
        >
          <Slider {...sliderSettingsVagas}>
            <div className="swiper-slide swiper-slide--one"></div>
            <div className="swiper-slide swiper-slide--two"></div>
            {/* Adicione mais slides conforme necessário */}
            <div className="swiper-slide swiper-slide--three"></div>
            <div className="swiper-slide swiper-slide--four"></div>
            <div className="swiper-slide swiper-slide--five"></div>
          </Slider>
        </div>

        {/* <img src="https://cdn.pixabay.com/photo/2012/04/13/13/57/scallop-32506_960_720.png" alt="" className="bg2" /> */}
      </section>
      {/* <div id="encontrevagas"></div>
      <section className="sectionVagasFiltradas">
        <div className="input-container">
          <h3>Busque sua vaga</h3>
          <div className="input-group"></div>
          <input
            type="text"
            placeholder="Digite sua cidade ou bairro"
            value={filtroCidade}
            onChange={handleInputChange}
            className={`input-cidade ${mostrarMensagem ? "input-error" : ""}`}
          />
          <button className="botao-filtrar" onClick={handleFiltrarVagas}>
            Filtrar
          </button>
        </div>
        {mostrarMensagem && (
          <div className="mensagem-erro">Insira sua cidade ou bairro</div>
        )}
        {mostrarMensagemSemVagas && (
          <div className="iODkpvDR">
            <div className="styles__ContainerEmpty-sc-19uu72c-6DR euoTqgDR">
              <h2>Ops!</h2>
              <h4>
                Ainda não existe nenhuma vaga cadastrada para a sua cidade ou
                bairro aqui.
              </h4>
              <p>
                Enquanto isso, você pode enviar seu currículo para nosso banco
                de talentos, assim nossos recrutadores poderão encontrar a vaga
                que melhor se encaixa no seu perfil.
              </p>
              <a href="https://drestagio.gupy.io/jobs/5131534?jobBoardSource=gupy_public_page">
                Quero entrar no Banco de Talentos!
              </a>
            </div>
          </div>
        )}

        {mostrarVagas && (
          <div className="styles__GridVacancies-sc-uz5dep-1 dIekxs">
            {vagasFiltradas.map((vaga) => (
              <a
                key={vaga.id}
                href={vaga.link}
                className="styles__Main-sc-12gs3xe-0 eDqasW"
              >
                <div className="styles__Container-sc-12gs3xe-1 lnUPSZ">
                  <h3 className="styles__Title-sc-12gs3xe-2 boMKOj">
                    <div style={{ display: "flex", gap: "8px" }}>
                      {vaga.titulo}
                    </div>
                    <div className="styles__Tag-sc-12gs3xe-5 iHQlpc">
                      <h3>
                        {vaga.tipoContrato
                          ? vaga.tipoContrato
                          : "Tipo de Contrato Não Especificado"}
                      </h3>
                    </div>
                  </h3>
                  <div className="styles__Row-sc-12gs3xe-6 kbMuqe">
                    <h4 className="styles__TitleLocation-sc-12gs3xe-3 eFkNkF">
                      {vaga.cidade}
                    </h4>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}





      </section> */}
{/* 
      <section className="iDZyfD">
  <div className="styles__Card-sc-dtfyah-1 fJJWdB">
    <h2 className="styles__Title-sc-dtfyah-2 inFZap title-desktop">Encontre as vagas que combinam com você</h2>
   
    <div className="styles__Row-sc-dtfyah-3 gnunXt">
      <div className="field">
        <div className="css-1s0fs6f">
          <input
            id="searchfield"
            placeholder="Buscar"
            value=""
            className="css-13hc3dd"
            onChange={handleInputChange}
          />
        </div>
        <button type="button">Buscar</button>
      </div>
    </div>
  </div>
</section> */}


    </>
  );
}
