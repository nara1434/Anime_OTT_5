import React, { useRef, useState, useEffect } from 'react';
import './Player.scss';

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
    { time: 10, title: "The Kiss", thumbnail: "/assets/images/action1.png" },
    { time: 30, title: "The Escape", thumbnail: "/assets/images/action2.png" },
    { time: 60, title: "The Confession", thumbnail: "/assets/images/anime.png" },
  ];

  useEffect(() => {
    setSceneThumbnails(scenes);
  }, []);

  const handleVolumeChange = (e) => {
    let vol = parseFloat(e.target.value);
    if (vol < 0) vol = 0;
    if (vol > 1) vol = 1;
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

  return (
    <div className="emotional-player-container">
      <div className="video-wrapper" style={{ filter: `brightness(${brightness}%)` }}>
        {showThumbnail && (
          <div className="thumbnail-overlay">
            <p>{showThumbnail ? "Mature themes ahead" : "You’re entering a romantic episode"}</p>
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
          Your browser does not support the video tag.
        </video>
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

      <div className="controls">
        <label>
          Speed: <span>⚡</span>
          <select value={playbackSpeed} onChange={(e) => changePlaybackSpeed(parseFloat(e.target.value))}>
            <option value={1}>Normal</option>
            <option value={1.5}>1.5x</option>
            <option value={2}>2x</option>
          </select>
        </label>

        <label>
          Quality: <span>📺</span>
          <select value={videoQuality} onChange={(e) => changeVideoQuality(e.target.value)}>
            <option value="1080p">1080p</option>
            <option value="720p">720p</option>
            <option value="480p">480p</option>
          </select>
        </label>
      </div>

      {showPoll && !hasVoted && (
        <div className="poll">
          <p>Did you enjoy the video?</p>
          <button onClick={() => handleVote('ship')}>💘</button>
          <button onClick={() => handleVote('breakup')}>💔</button>
        </div>
      )}
    </div>
  );
};

export default Player;