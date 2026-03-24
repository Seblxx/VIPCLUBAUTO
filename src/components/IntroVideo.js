import React, { useState, useEffect } from 'react';
import './IntroVideo.css';

const IntroVideo = ({ onComplete }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    // Allow skipping after 3 seconds
    const timer = setTimeout(() => {
      setCanSkip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setIsPlaying(false);
    onComplete();
  };

  const handleSkip = () => {
    if (canSkip) {
      setIsPlaying(false);
      onComplete();
    }
  };

  if (!isPlaying) return null;

  return (
    <div className="intro-video-container">
      <video
        className="intro-video"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      >
        <source src="/INTRO VIDEO.mp4" type="video/mp4" />
      </video>
      
      {canSkip && (
        <button className="skip-intro-btn" onClick={handleSkip}>
          SKIP
        </button>
      )}
    </div>
  );
};

export default IntroVideo;
