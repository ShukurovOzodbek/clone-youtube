import React from 'react';

const SideVideos = ({ video, onVideoSelect, main }) => {

     const handleChange = () => {
          if(video.snippet.title.length > 15){
               onVideoSelect(video)
               main(true)
          }else{
               alert('asfasf')
          }
     }

     return (
          <>
               <a href="#header" style={{ all: 'unset' }}>
                    <div className={`videoItems ${video.snippet.title.length < 15 ? 'channel' : ''}`} onClick={handleChange} >
                         <img src={video.snippet.thumbnails.medium.url} alt="overlay" className={video.snippet.title.length < 15 ? 'radius' : ''} style={{ marginRight: "20px" }} />
                         <div className="titleVideo">
                              <p>{video.snippet.title}</p>
                         </div>
                    </div>
               </a>
          </>
     );
};

export default SideVideos;