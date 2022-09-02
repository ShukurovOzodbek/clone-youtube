import React, { useState } from 'react';
import Search from './cloneMain/Search';
import URL from './cloneMain/api/URL';
import './Design.css';
import Video from './cloneMain/Video';
import ListVideos from './cloneMain/ListVideos';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState({ id: {}, snippet: {} });
  const [videoMain, setVideoMain] = useState(false)

  async function videoSubmit(searchTerm) {
    const { data: { items: videos } } = await URL.get("search", {
      params: {
        part: "snippet",
        maxResults: 60,
        key: "AIzaSyC4HtSwSzpwlqoHnERzQLnCX5oRrljl1Uk",
        q: searchTerm
      }
    });

    setVideos(videos);
    setVideoMain(false)
  }

  return (
    <>
      <div className="searchSec" id={'header'}>
        <Search onSubmit={videoSubmit} />
      </div>
      <div className="videoMain">
        {
          videoMain ? <div className="videoSec">
          <Video video={selectedVideos} />
        </div>
        : ''
        }
        <div className="videoLists mainVideoApp">
          <ListVideos main={setVideoMain} videos={videos} onVideoSelect={setSelectedVideos} />
        </div>
      </div>
    </>
  );
};

export default App;