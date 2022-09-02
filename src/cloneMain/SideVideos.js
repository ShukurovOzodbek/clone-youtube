import React from 'react';

const SideVideos = ({ video, onVideoSelect, mainValue, main, alert }) => {
     
     const handleChange = () => {
          if(video.snippet.title.length > 15){
               onVideoSelect(video)
               main(true)
          }else{
               alert(true)
               setTimeout(() => {
                    alert(false)
               }, 3000);
          }
     }
     return (
          <>
               <a href="#header" style={{ all: 'unset' }}>
                    <div className={`videoItems ${video.snippet.title.length < 15 ? 'channel' : ''}`} onClick={handleChange} >
                         <img src={video.snippet.thumbnails.medium.url} alt="overlay" className={video.snippet.title.length < 15 ? 'radius' : ''} style={{ marginRight: "20px" }} />
                         <div className="titleVideo">
                              <p>{mainValue ? video.snippet.title.split(' ').splice(0, 6).join(' ') + '...': video.snippet.title}</p>
                         </div>
                    </div>
               </a>
          </>
     );
};

export default SideVideos;