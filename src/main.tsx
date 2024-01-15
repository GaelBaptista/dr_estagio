
import  { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
 
  Outlet,
} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import "./App.css";
import { Login_aluno } from "./routes/Login/login";

import {Home} from "./routes/Home/Home";
import {About} from "./routes//AboutUs/About";
import Contact from "./routes//Contact/Contact";
import ErrorPage from "./routes/ErrorPage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/footer";
import { Vagas } from "./routes/Projects/Vagas/Vagas";
import { Projects } from "./routes/Projects/projects";
import { PrEst } from "./routes/ProgramaDeEstagio/Estagio/PrEst";
import { Esg } from "./routes/Projects/Esg/Esg";
import { NossoMapa } from "./routes/Localizacao/NossoMapa";
import { Varejo } from "./routes/ProgramaDeEstagio/Varejo/Varejo";
import { Farmacia } from "./routes/ProgramaDeEstagio/Farmacia/farmacia";
// import { Servicos } from "./routes/Projects/Sericos/servicos";
import { Blog } from "./routes/Blog/blogprops";
import { DrConect } from "./routes/Blog/PagesBlog/DrConect/DrConect";
import { GuiaBlog } from "./routes/Blog/PagesBlog/Guia/Guia";
import { CsEmpresaInovadora } from "./routes/Blog/PagesBlog/EmpresaInovadora/Cs";
import { Login_empresa } from "./routes/Login/Login_Empresa/loginEmpresa";




const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <ScrollToTop /> {/* isso vai controlar a rolagem */}
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login_aluno",
        element: <Login_aluno />,
      },
      {
        path: "login_empresa",
        element: <Login_empresa />,
      },
      {
        path: "programa-estagio",
        element: <PrEst />, 
      },
      {
        path: "varejo",
        element: <Varejo />, 
      },
    
      {
        path: "farmacia",
        element: <Farmacia />, 
      },
    
      {
        path: "mais",
        element: <NossoMapa/>,
      },
      {
        path: "projects",
        element: <Projects />,
        children: [
          {
            path: "contact",
            element: <Contact />,
          },
         
         
          {
            path: "vagas",
            element: <Vagas />,
          },
        
         
        ],
      },
      {
        path: "blog",
        element: <Blog/>,
      },
      {
        path: "DrConect",
        element: <DrConect/>,
      },
      {
        path: "GuiadoEstagiario",
        element: <GuiaBlog/>,
      },
      {
        path: "3csEmpresaInovadora",
        element: <CsEmpresaInovadora/>,
      },

      {
        path: "esg",
        element: <Esg />,
      },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);


