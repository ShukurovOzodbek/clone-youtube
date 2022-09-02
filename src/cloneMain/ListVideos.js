import React from 'react';
import SideVideos from './SideVideos';

const ListVideos = ({ videos, onVideoSelect, main, alert, mainValue }) => {
     const videoLists = videos.map(video => (
          <SideVideos 
               onVideoSelect={onVideoSelect}
               key={video.id.videoId}
               video={video}
               main={main}
               alert={alert}
               mainValue={mainValue}
          />
     ));

     return (
          <div>
               {videoLists}
          </div>
     );
};

export default ListVideos;