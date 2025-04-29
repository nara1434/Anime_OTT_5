import React, { useRef, useState, useEffect } from 'react';
import './Player.scss';
import { CiBrightnessUp } from "react-icons/ci";
import { FaVolumeHigh } from "react-icons/fa6";
import Relationship from '../components/Relationship';
import { useNavigate } from 'react-router-dom';

const Player = () => {
  const videoRef = useRef(null);
  const [volume, setVolume] = useState(1);
  const [brightness, setBrightness] = useState(100);
  const [subtitlesEnabled, setSubtitlesEnabled] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [videoQuality, setVideoQuality] = useState('1080p');
  const [showWarning, setShowWarning] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [showPoll, setShowPoll] = useState(false);
  const [reactionEmoji, setReactionEmoji] = useState(null);
  const [sceneHovered, setSceneHovered] = useState(null);
  const [sceneThumbnails, setSceneThumbnails] = useState([]);
  const [currentScene, setCurrentScene] = useState(null);
  const [showThumbnail, setShowThumbnail] = useState(true);

  const warnings = [
    { time: 5, message: '⚠️ Trigger Warning: Emotional Abuse', type: 'emotional' },
    { time: 15, message: '⚠️ Trigger Warning: Violence', type: 'intense' },
  ];

  const scenes = [
    { time: 10, title: "The Kiss", thumbnail: "/assets/images/10sec.PNG" },
    { time: 30, title: "The Escape", thumbnail: "/assets/images/30sec.PNG" },
    { time: 60, title: "The Confession", thumbnail: "/assets/images/1min.PNG" },
  ];

  useEffect(() => {
    setSceneThumbnails(scenes);
  }, []);

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    videoRef.current.volume = vol;
  };

  const handleTimeUpdate = () => {
    const currentTime = Math.floor(videoRef.current.currentTime);

    const warning = warnings.find(w => w.time === currentTime);
    if (warning && (!showWarning || showWarning.time !== warning.time)) {
      setShowWarning({ ...warning, time: currentTime });
      setTimeout(() => setShowWarning(null), 5000);
    }

    const scene = scenes.find(scene => scene.time === currentTime);
    if (scene && currentScene !== scene.title) {
      setCurrentScene(scene.title);
    }

    if (currentTime >= 10 && currentTime < 12) {
      videoRef.current.classList.add('blurred');
    } else {
      videoRef.current.classList.remove('blurred');
    }
  };

  const handleVote = (vote) => {
    setHasVoted(true);
    setReactionEmoji(vote === 'ship' ? '💘' : '💔');
    setTimeout(() => {
      setReactionEmoji(null);
      setShowPoll(false);
    }, 1500);
  };

  const changePlaybackSpeed = (speed) => {
    setPlaybackSpeed(speed);
    videoRef.current.playbackRate = speed;
  };

  const changeVideoQuality = (quality) => {
    setVideoQuality(quality);
    const qualityMap = {
      '1080p': '/assets/yt1z.net - Justin Bieber - Baby ft. Ludacris (1080p).mp4',
      '720p': '/assets/yt1z.net - Justin Bieber - Baby ft. Ludacris (720p).mp4',
      '480p': '/assets/yt1z.net - Justin Bieber - Baby ft. Ludacris (480p).mp4'
    };
    videoRef.current.src = qualityMap[quality];
    videoRef.current.load();
    videoRef.current.play();
  };

  const toggleSubtitles = () => {
    setSubtitlesEnabled(!subtitlesEnabled);
  };

  const showPollAtEnd = () => {
    setShowPoll(true);
  };

  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/home'); 
  };

  return (
    <div className='one'>
    <div>

      <button
        onClick={handleBackButtonClick}
        style={{
          background: 'linear-gradient(45deg, #FFB6C1 30%, #000000 90%)',
          color: 'white',
          padding: '10px 20px',
          border: '1px solid white',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '30px',
          marginLeft: '20px',
          fontSize: '16px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
        }}
      >
        &larr; Back
      </button>

      <div className="emotional-player-container">
        <div className="video-wrapper" style={{ filter: `brightness(${brightness}%)` }}>
          {showThumbnail && (
            <div className="thumbnail-overlay">
              <p>Mature themes ahead</p>
              <button onClick={() => setShowThumbnail(false)}>Start Watching</button>
            </div>
          )}

          {showWarning && (
            <div className={`trigger-warning ${showWarning.type}`}>
              {showWarning.message}
            </div>
          )}

          <video
            ref={videoRef}
            width="100%"
            height="auto"
            controls
            crossOrigin="anonymous"
            className="emotional-video"
            onTimeUpdate={handleTimeUpdate}
            onEnded={showPollAtEnd}
          >
            <source
              src="/assets/yt1z.net - Justin Bieber - Baby ft. Ludacris (1080p).mp4"
              type="video/mp4"
            />
            {subtitlesEnabled && (
              <track
                label="English"
                kind="subtitles"
                srcLang="en"
                src="/assets/bossbaby_subs.vtt"
                default
              />
            )}
          </video>
          
          <div className="video-overlay-buttons">
            <button className="seek-btn inside left" onClick={() => videoRef.current.currentTime -= 10}>⏪</button>
            <button className="seek-btn inside right" onClick={() => videoRef.current.currentTime += 10}>⏩</button>
          </div>

        </div>

        <div className="volume-brightness-controls">
          <label className="control-item">
            <span className="label-text"><FaVolumeHigh /></span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          </label>

          <label className="control-item">
            <span className="label-text"><CiBrightnessUp /></span>
            <input
              type="range"
              min="50"
              max="150"
              step="1"
              value={brightness}
              onChange={(e) => setBrightness(e.target.value)}
            />
          </label>
        </div>

        <div className="controls">
          <label>
            Speed: ⚡
            <select value={playbackSpeed} onChange={(e) => changePlaybackSpeed(parseFloat(e.target.value))}>
              <option value={1}>Normal</option>
              <option value={1.5}>1.5x</option>
              <option value={2}>2x</option>
            </select>
          </label>

          <label>
            Quality: 📺
            <select value={videoQuality} onChange={(e) => changeVideoQuality(e.target.value)}>
              <option value="1080p">1080p</option>
              <option value="720p">720p</option>
              <option value="480p">480p</option>
            </select>
          </label>
        </div>

        <div className="scene-thumbnails">
          {sceneThumbnails.map((scene, index) => (
            <div
              key={index}
              className="scene-thumbnail"
              onClick={() => videoRef.current.currentTime = scene.time}
              onMouseEnter={() => setSceneHovered(scene.title)}
              onMouseLeave={() => setSceneHovered(null)}
            >
              <img src={scene.thumbnail} alt={scene.title} />
              {sceneHovered === scene.title && <div className="scene-tooltip">{scene.title}</div>}
            </div>
          ))}
        </div>

        {showPoll && !hasVoted && (
          <div className="poll">
            <p>Did you enjoy the video?</p>
            <button onClick={() => handleVote('ship')}>💘</button>
            <button onClick={() => handleVote('breakup')}>💔</button>
          </div>
        )}
      </div>
      <div style={{ marginTop: '-130px' }}>
        <Relationship />
      </div>
    </div>
    </div>
  );
};

export default Player;
