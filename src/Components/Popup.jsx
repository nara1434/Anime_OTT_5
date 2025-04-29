import React, { useState } from 'react';

const Popup = ({ userInfo, setUserInfo, togglePopup }) => {
  const [newName, setNewName] = useState(userInfo.name);
  const [newAvatar, setNewAvatar] = useState(userInfo.avatar);
  const [fileChosen, setFileChosen] = useState(false); // To check if a new file is selected

  const handleSave = () => {
    setUserInfo({ ...userInfo, name: newName, avatar: newAvatar });
    togglePopup();
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setNewAvatar(URL.createObjectURL(e.target.files[0]));
      setFileChosen(true);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Edit Profile</h3>
        <div className="avatar-preview">
          <img src={newAvatar} alt="new-avatar" className="avatar" />
        </div>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter new name"
        />
        {fileChosen ? (
          <div>
            <span>{fileChosen ? 'File Chosen' : 'No File Chosen'}</span>
          </div>
        ) : (
          <input type="file" onChange={handleFileChange} />
        )}
        <div>
          <button onClick={handleSave}>Save</button>
          <button onClick={togglePopup}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
