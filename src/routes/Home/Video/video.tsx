import './video.css'


import { YoutubeEmbed } from './iframe';


export function Video () {
 
  


  return (
    <section>
      <div className="section-head VideoSection ">
          <h4><span>Depoimentos de</span>Nossos Clientes</h4>
          <div className='divider__title'>
            
          <span className="hr-line"><span><span></span></span></span>
          
          </div>
          
        </div>


        <div className="container-video">
      <div className="video-container">

      

      <YoutubeEmbed
          videoId="Xxg5EZKT-gY?si=Fr0LwSuFoGXnPEG"
          title="Diretor - Moranguinho Supermercado"
          videoLink="https://youtu.be/Xxg5EZKT-gY?si=HMrrO7_uK3n1pxFI"
        />

        <YoutubeEmbed
          videoId="Qm3hpfwab2A"
          title="Diretora - Supermercado Redenção"
          videoLink="https://youtu.be/Qm3hpfwab2A?si=DXh_zBPp2RerE-n_"
        />
    
      
      
      
         <YoutubeEmbed
          videoId="W7WYhvKXiUg"
          title="Queiroz Supermercado - RN"
          videoLink="https://youtu.be/W7WYhvKXiUg?si=Y0d3lrtLQ1Ye7E7M"
        />
         <YoutubeEmbed
          videoId="JZxful-UQUk"
          title="Anali Supermercado"
          videoLink="https://www.youtube.com/embed/JZxful-UQUk?si=pPe3nLacnmgjtXS1" 
        />
       
        
        

        <YoutubeEmbed
          videoId="KrSUQ5qS_Qk"
          title="Janaina Rodrigues"
          videoLink="https://youtu.be/KrSUQ5qS_Qk?si=m0WUX4A7m2APanEt"
        />
      <YoutubeEmbed
          videoId="3ReKefEAqwg"
          title="LM Consultoria"
          videoLink="https://youtu.be/3ReKefEAqwg"
        />
          
       
       
          </div>


        </div>
      
    </section>
  )
}

 