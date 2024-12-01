import React, { useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  return (
    <div className="video-player">
      <video ref={videoRef} width="600" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <button onClick={playVideo}>Start</button>
        <button onClick={pauseVideo}>Stop</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
