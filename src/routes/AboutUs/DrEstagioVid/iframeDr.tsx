import '../../Home/Video/video.css'

interface YoutubeEmbedProps {
  videoId: string;
  

}

export const YoutubeEmbedDr: React.FC<YoutubeEmbedProps> = ({ videoId}) => {
  return (
    <div className='Iframe' >
      <iframe
        className="video"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    <div className="info_iframe">

 
</div>

    </div>
  );
};
