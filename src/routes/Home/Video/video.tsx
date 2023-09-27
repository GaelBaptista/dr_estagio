import './video.css'

// import  { useState, useRef } from 'react';
import { YoutubeEmbed } from './iframe';


export function Video () {
 
  //   const [clickedVideo, setClickedVideo] = useState<string | null>(null); // Definindo o tipo como string
  // const [popupVisible, setPopupVisible] = useState(false);

  // const videoRef = useRef<HTMLVideoElement | null>(null); // Adicionando a referência
  // const handleVideoClick = (videoSrc: string) => { // Definindo o tipo como string
  //   setClickedVideo(videoSrc);
  //   setPopupVisible(true);
  // };
  // const handleClosePopup = () => {
  //   if (videoRef.current) {
  //     videoRef.current.pause(); // Pausar o vídeo ao fechar o popup
  //     videoRef.current.currentTime = 0; // Reiniciar o vídeo para o início
  //   }
  //   setPopupVisible(false);
  // };


  return (
    <section>
      <div className="section-head VideoSection ">
          <h4><span>Depoimentos de</span>Nossos clientes</h4>
          {/* <p className='gestaodh'>Promover uma gestão do desenvolvimento humano (DH) significa transformar as vivências e habilidades de
            cada trabalhador em um recurso muito valioso para o crescimento da empresa e do desenvolvimento dos colaboradores

          </p> */}
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
          videoId="zLmcyDmMKmo"
          title="AconcheMax"
          videoLink="https://youtu.be/zLmcyDmMKmo?si=HUWVZlYHokgkb2cA"
        />
         <YoutubeEmbed
          videoId="W7WYhvKXiUg"
          title="Queiroz Supermercado - RN"
          videoLink="https://youtu.be/W7WYhvKXiUg?si=Y0d3lrtLQ1Ye7E7M"
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
          
       
       
             {/* <div className="video"><video src={Video1} onClick={() => handleVideoClick(Video1)}></video></div> */}
          {/* <div className="video"><video src={Video2} onClick={() => handleVideoClick(Video2)}> </video></div> */}
          {/* <div className="video"><video src={Video3} onClick={() => handleVideoClick(Video3)} ></video></div> */}
       
          </div>


          {/* <div className={`popup-video ${popupVisible ? 'active' : ''}`}>
  <span onClick={handleClosePopup}>&times;</span>
  {clickedVideo && <video ref={videoRef} src={clickedVideo}  autoPlay controls></video>}
</div> */}
        </div>
      
    </section>
  )
}

  {/* <script>
          documet.querySelectorAll('.video-container video').forEach(vid=>{
              vid.onClick =()=>{
                documet.querySelector('.popup-video').style.display='block';
                documet.querySelector('.popup-video video').src = vid.getAttribute('src')
              }
          });
           documet.querySelector('.popup-video span').onClick =()=>{
             documet.querySelector('.popup-video').style.display='block';
           }
        </script> */}