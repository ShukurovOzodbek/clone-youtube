import React from 'react';

const SideVideos = ({ video, onVideoSelect }) => {
     return (
          <>
               <div className="videoItems" onClick={() => onVideoSelect(video)} >
                    <img src={video.snippet.thumbnails.medium.url} alt="overlay" style={{ marginRight: "20px"}} />
                    <div className="titleVideo">
                         <p>{video.snippet.title.slice(0,48)}{video.snippet.title.length > 43 ? '' : '...'}</p>
                    </div>
               </div>
          </>
     );
};

export default SideVideos;