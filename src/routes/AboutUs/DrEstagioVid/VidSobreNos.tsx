

import { YoutubeEmbedDr } from './iframeDr';
import './sobrenosvid.css'

export function VidSobreNos () {
 return (
  <>
  <div className="section-head about-section ">
          <h4><span>Nossa empresa em ação:</span>Um olhar sucinto sobre quem somos</h4>
       
        </div>
    <section className=' VideoSectionAbout '>
        <div className="container-video">
      <div className="video-container">
      <YoutubeEmbedDr
          videoId="qKi5pkFaT44?si=_dhUcA9Rh9JOXbEz"
          />
      </div>
      </div>
      
    </section>
          </>
  )
}