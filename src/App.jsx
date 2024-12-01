import React from 'react';
import Timer from './components/Timer';
import ImageZoom from './components/ImageZoom';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

const App = () => {
  return (
    <div className="app">


      <div className="component">
        <Timer />
      </div>

      <div className="component">
        <ImageZoom />
      </div>

      <div className="component">
        <VideoPlayer />
      </div>
    </div>
  );
};

export default App;
