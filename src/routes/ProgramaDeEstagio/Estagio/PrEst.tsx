import { useState } from "react";
import "./PrEst.css";

import { FAQ } from "./FAQ";
import { FAQItem } from "./FAQ";
import CarouselComponent from "../servicos_pr/Cardservico";
import { Testimonials_ } from "../servicos_pr/testimonials";
import { Varejo_Farmacia } from "../servicos_pr/Varejo_farma";

export function PrEst() {
  const categories = [
    "Benefícios Programa de Estágio",
    "Cota de Estagiário",
    "Benefícios Sociais",
    "Benefícios Trabalhistas",
    "Como Aderir ao programa de estágio",
    // adicionar mais se precisar
  ];

  const initialCategoryFaqs: { [key: string]: FAQItem[] } = {
    "Benefícios Programa de Estágio": [
      {
        question: "Custo reduzido",
        answer:
          "O estágio é regido por Legislação própria e, observados os requisitos legais, não estabelece vínculo empregatício de qualquer natureza, assim ficam isentos de alguns impostos trabalhistas, tais como: FGTS, INSS, 13º salário, ⅓ sobre férias. Isso só é possível, pois não se trata de um posto com registro na CTPS (Carteira de Trabalho e Previdência Social). Isso ajuda a reduzir os custos e possibilita as empresas investir em talentos promissores.",
        open: false,
      },
      {
        question: "Prospeção e renovação de talento",
        answer:
          "Contratar estagiários permite que a empresa atraia talentos, trazendo novas ideias, perspectivas e habilidades para a sua equipe possibilitando a identificação dos mais talentosos e adequados para a cultura organizacional, permitindo que a empresa avalie potenciais futuros colaboradores.",
        open: false,
      },
      {
        question: "Treinamentos e desenvolvimentos",
        answer:
          "Os estagiários são excelentes candidatos para treinamento e desenvolvimento, pois ainda estão em fase de aprendizado e podem ser moldados de acordo com as necessidades da empresa.",
        open: false,
      },

      {
        question: "Flexibilidade",
        answer:
          "Os contratos de estágio normalmente têm uma duração pré-definida, o que oferece à empresa maior flexibilidade ao contratar pessoas para projetos específicos ou períodos de demanda temporária.",
        open: false,
      },

      {
        question: "Aprendizado mútuo",
        answer:
          "Os estagiários trazem consigo conhecimentos e perspectivas atualizadas, tendo a oportunidade de aprender com os profissionais experientes da empresa.",
        open: false,
      },
    ],
    "Cota de Estagiário": [
      {
        question: "De 01 (um) a 05 (cinco) CLT ",
        answer: "01 (um) estagiário.",
        open: false,
      },
      {
        question: "De 06 (seis) a 10 (dez) CLT  ",
        answer: "até 02 (dois) estagiários.",
        open: false,
      },
      {
        question: "De 11 (onze) a 25 (vinte e cinco) CLT  ",
        answer: "até 05 (cinco) estagiários.",
        open: false,
      },
      {
        question: "Acima de 25 (vinte e cinco) CLT  ",
        answer: "até 20% (vinte por cento) de estagiários.",
        open: false,
      },
    ],
    "Benefícios Sociais": [
      {
        question: "Contribuição para a formação de futuros profissionais",
        answer:
          "Ao oferecer oportunidades de estágio, as empresas ajudam na formação de jovens talentos, preparando-os para o mercado de trabalho e contribuindo para a capacitação de futuros profissionais.",
        open: false,
      },
      {
        question: "Fortalecimento da Marca",
        answer:
          "Empresas que oferecem programas de estágio bem estruturados e valorizam o desenvolvimento profissional dos estagiários tendem a ganhar uma imagem positiva perante a sociedade e até mesmo potenciais clientes.",
        open: false,
      },
      {
        question: "Integração entre gerações",
        answer:
          "A presença de estagiários pode promover a integração entre diferentes gerações de funcionários na empresa. Os estagiários podem trazer perspectivas atualizadas, enquanto os funcionários mais experientes podem compartilhar seus conhecimentos e sabedoria.",
        open: false,
      },
    ],
    "Benefícios Trabalhistas": [
      {
        question: "O Caráter Formativo do Estágio",
        answer:
          "O estágio tem um caráter educacional e formativo, com o objetivo de proporcionar ao estudante a oportunidade de aplicar e aprimorar seus conhecimentos teóricos na prática profissional. O estagiário recebe uma bolsa-auxílio como forma de contraprestação pelo seu trabalho, que não é considerada um salário, e não estão previstos direitos trabalhistas, como FGTS, férias remuneradas ou 13º salário.",
        open: false,
      },
    ],
    "Como Aderir ao programa de estágio": [
      {
        question: "Termo de Convênio",
        answer:
          "A adesão do Programa de estágio é formalizada por meio de termo de convênio, esse termo estabelece as bases e as responsabilidades de cada parte envolvida no programa de estágio, sendo uma forma de garantir transparência e segurança nos processos.",
        open: false,
      },
    ],
    // adicionar mais se precisar
  };

  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [categoryFaqs, setCategoryFaqs] = useState(initialCategoryFaqs);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const toggleFAQ = (index: number) => {
    setCategoryFaqs((prevCategoryFaqs) => {
      return {
        ...prevCategoryFaqs,
        [activeCategory]: prevCategoryFaqs[activeCategory].map((faq, i) => {
          if (i === index) {
            return {
              ...faq,
              open: !faq.open,
            };
          }
          return {
            ...faq,
            open: false,
          };
        }),
      };
    });
  };
  return (
    <>
      <section className="ContainerProgramadeEstagio">
        <div className="section-head prEst">
          <h4>
            <span>Oque é o</span>Programa de Estágio
          </h4>
          <div className="divider__title">
            <span className="hr-line">
              <span>
                <span></span>
              </span>
            </span>
          </div>
          <p className="gestaodh">
            O programa de estágio é um projeto que desenvolve estudantes por
            meio de estágio para atuar em diversas áreas do mercado de trabalho,
            visa primordialmente proporcionar aprendizado assegurando que os
            estagiários alcancem um desempenho profissional notável, enquanto a
            empresa contratante colhe os benefícios da legislação de incentivo
            ao estágio sem lidar com as complicações burocráticas.
          </p>
        </div>

        {/* =========================================================FAQ=============================================================================================================== */}

        <div className="containerFAQ">
          <div id="faq-links">
            {categories.map((category, index) => (
              <div className="faq-faq">
                <div
                  key={index}
                  className={activeCategory === category ? "faq-selected" : ""}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="faqs faq-grid">
          {categoryFaqs[activeCategory].map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </section>

      <Varejo_Farmacia />
      <CarouselComponent />
      <Testimonials_ />
    </>
  );
}
