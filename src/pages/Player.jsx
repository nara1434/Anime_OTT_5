// import React, { useState, useEffect } from "react";
// import "./Player.scss";
 
// const Player = () => {
//   const [showWarning, setShowWarning] = useState(true);
//   const [isIntimateScene, setIsIntimateScene] = useState(false);
//   const [currentEmotion, setCurrentEmotion] = useState("love");
 
//   useEffect(() => {
//     // Simulate mood changes for demo
//     const emotionTimer = setInterval(() => {
//       const emotions = ["love", "anger", "sadness"];
//       const random = emotions[Math.floor(Math.random() * emotions.length)];
//       setCurrentEmotion(random);
//       setIsIntimateScene(random === "love");
//     }, 12000);
 
//     return () => clearInterval(emotionTimer);
//   }, []);
 
//   const getSubtitleColor = () => {
//     switch (currentEmotion) {
//       case "love":
//         return "#ff69b4"; // Pink
//       case "anger":
//         return "#ff1e1e"; // Red
//       case "sadness":
//         return "#1e88e5"; // Blue
//       default:
//         return "#ffffff";
//     }
//   };
 
//   return (
//     <div className={`video-container ${isIntimateScene ? "vignette blur" : ""}`}>
//       {showWarning && (
//         <div className="warning-overlay">
//           <p className="warning-text">You're entering a romantic episode</p>
//           <button onClick={() => setShowWarning(false)}>Continue</button>
//         </div>
//       )}
 
//       <video controls className="video-element" autoPlay muted>
//         <source src="/assets/THE BOSS BABY _ Teaser Trailer.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
 
//       <div className="subtitle" style={{ color: getSubtitleColor() }}>
//         “I never stopped loving you… even when it hurt.”
//       </div>
 
//       {isIntimateScene && <div className="pulse-visualizer" />}
//     </div>
//   );
// };
 
// export default Player;

// import React, { useRef, useState } from 'react';
// import './Player.scss';

// const subtitles = {
//   love: '/assets/subs/episode1-love.vtt',
//   anger: '/assets/subs/episode1-anger.vtt',
//   sadness: '/assets/subs/episode1-sadness.vtt',
// };

// const Player = () => {
//   const videoRef = useRef();
//   const [selectedSubtitle, setSelectedSubtitle] = useState('love');
//   const [playbackRate, setPlaybackRate] = useState(1);
//   const [volume, setVolume] = useState(1);
//   const [quality, setQuality] = useState('720p');

//   const handleSubtitleChange = (e) => {
//     setSelectedSubtitle(e.target.value);
//     videoRef.current.load();
//     videoRef.current.play();
//   };

//   const handleRateChange = (e) => {
//     const rate = parseFloat(e.target.value);
//     setPlaybackRate(rate);
//     videoRef.current.playbackRate = rate;
//   };

//   const handleVolumeChange = (e) => {
//     const vol = parseFloat(e.target.value);
//     setVolume(vol);
//     videoRef.current.volume = vol;
//   };

//   const handleQualityChange = (e) => {
//     setQuality(e.target.value);
//     // Simulate different quality with different sources
//     videoRef.current.load();
//     videoRef.current.play();
//   };

//   const videoSources = {
//     '720p': '/assets/videos/episode1-720p.mp4',
//     '1080p': '/assets/videos/episode1-1080p.mp4',
//   };

//   return (
//     <div className={`video-player-page ${selectedSubtitle}`}>
//       <div className="video-container">
//         <video
//           ref={videoRef}
//           controls
//           preload="auto"
//           poster="/assets/posters/romantic-scene.jpg"
//         >
//           <source src={videoSources[quality]} type="video/mp4" />
//           <track
//             label="Subtitles"
//             kind="subtitles"
//             srcLang="en"
//             src={subtitles[selectedSubtitle]}
//             default
//           />
//           Your browser does not support the video tag.
//         </video>

//         <div className="controls">
//           <label>
//             🎭 Subtitles:
//             <select value={selectedSubtitle} onChange={handleSubtitleChange}>
//               <option value="love">💖 Love</option>
//               <option value="anger">💢 Anger</option>
//               <option value="sadness">💙 Sadness</option>
//             </select>
//           </label>

//           <label>
//             🔊 Volume:
//             <input
//               type="range"
//               min="0"
//               max="1"
//               step="0.01"
//               value={volume}
//               onChange={handleVolumeChange}
//             />
//           </label>

//           <label>
//             ⏩ Speed:
//             <select value={playbackRate} onChange={handleRateChange}>
//               <option value="0.5">0.5x</option>
//               <option value="1">1x</option>
//               <option value="1.5">1.5x</option>
//               <option value="2">2x</option>
//             </select>
//           </label>

//           <label>
//             📺 Quality:
//             <select value={quality} onChange={handleQualityChange}>
//               <option value="720p">720p</option>
//               <option value="1080p">1080p</option>
//             </select>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Player;

 
import React, { useRef, useState, useEffect } from 'react';

const subtitles = [
  {
    start: 1,
    end: 4,
    text: '“I never believed in love at first sight...”',
    emotion: 'love',
  },
  {
    start: 5,
    end: 8,
    text: '“...until I saw you standing in the rain.”',
    emotion: 'love',
  },
  {
    start: 10,
    end: 13,
    text: '“But why didn’t you tell me the truth?”',
    emotion: 'sad',
  },
  {
    start: 15,
    end: 18,
    text: '“Because I was afraid… afraid of losing you.”',
    emotion: 'anger',
  },
];

const emotionColors = {
  love: '#ff69b4',
  sad: '#0000ff',
  anger: '#ff0000',
};

const Player = () => {
  const videoRef = useRef(null);
  const [currentSubtitle, setCurrentSubtitle] = useState('');

  useEffect(() => {
    const video = videoRef.current;

    const checkSubtitles = () => {
      const currentTime = video.currentTime;
      const activeSubtitle = subtitles.find(
        (s) => currentTime >= s.start && currentTime <= s.end
      );
      if (activeSubtitle) {
        setCurrentSubtitle(activeSubtitle);
      } else {
        setCurrentSubtitle('');
      }
    };

    video.addEventListener('timeupdate', checkSubtitles);
    return () => video.removeEventListener('timeupdate', checkSubtitles);
  }, []);

  return (
    <div style={{ position: 'relative', width: '80%', margin: 'auto' }}>
      <video
        ref={videoRef}
        controls
        width="100%"
        style={{ borderRadius: '16px', background: '#000' }}
      >
        <source src="/assets/THE BOSS BABY _ Teaser Trailer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {currentSubtitle && (
        <div
          style={{
            position: 'absolute',
            bottom: '50px',
            width: '100%',
            textAlign: 'center',
            fontSize: '1.4rem',
            color: emotionColors[currentSubtitle.emotion],
            fontStyle: 'italic',
            fontFamily: 'Dancing Script, cursive',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
          }}
        >
          {currentSubtitle.text}
        </div>
      )}
    </div>
  );
};

export default Player;
