import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faPencilAlt, faTrashAlt, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './ProfilePage.scss';
import NavBar from './NavBar';

function ProfilePage() {
  const [profiles, setProfiles] = useState([]);
  const [editingProfileIndex, setEditingProfileIndex] = useState(null);
  const [editedProfileName, setEditedProfileName] = useState('');

  const loadProfiles = useCallback(() => {
    const profileCount = parseInt(localStorage.getItem('profileCount') || '0', 10);
    const loaded = Array.from({ length: profileCount }, (_, i) => {
      const profileData = localStorage.getItem(`profile_${i + 1}`);
      return profileData ? JSON.parse(profileData) : null;
    }).filter(Boolean);
    setProfiles(loaded);
  }, []);

  useEffect(() => {
    loadProfiles();
  }, [loadProfiles]);

  const saveProfiles = useCallback((currentProfiles) => {
    localStorage.setItem('profileCount', currentProfiles.length.toString());
    currentProfiles.forEach((profile, index) => {
      localStorage.setItem(`profile_${index + 1}`, JSON.stringify(profile));
    });
    for (let i = currentProfiles.length + 1; localStorage.getItem(`profile_${i}`); i++) {
      localStorage.removeItem(`profile_${i}`);
    }
  }, []);

  const handleDeleteProfile = useCallback((index) => {
    const updatedProfiles = profiles.filter((_, i) => i !== index);
    setProfiles(updatedProfiles);
    saveProfiles(updatedProfiles);
  }, [profiles, saveProfiles]);

  const handleEditProfile = useCallback((index) => {
    setEditingProfileIndex(index);
    setEditedProfileName(profiles[index].newName);
  }, [profiles]);

  const handleSaveEditedProfile = useCallback(() => {
    const updatedProfiles = profiles.map((profile, index) =>
      index === editingProfileIndex ? { ...profile, newName: editedProfileName } : profile
    );
    setProfiles(updatedProfiles);
    saveProfiles(updatedProfiles);
    setEditingProfileIndex(null);
    setEditedProfileName('');
  }, [editingProfileIndex, editedProfileName, profiles, saveProfiles]);

  const handleCancelEditProfile = useCallback(() => {
    setEditingProfileIndex(null);
    setEditedProfileName('');
  }, []);

  const handleSignOutUser = useCallback(() => {
    localStorage.clear();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="profile-page">
        <div className="profile-management">
          <h2>User Profiles</h2>
          <div className="profile-list">
            {profiles.map((profile, index) => (
              <div key={index} className="profile-item">
                <div className="profile-icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                {editingProfileIndex === index ? (
                  <div className="edit-profile-controls">
                    <input
                      type="text"
                      value={editedProfileName}
                      onChange={(e) => setEditedProfileName(e.target.value)}
                      className="edit-input"
                    />
                    <div className="actions">
                      <button onClick={handleSaveEditedProfile} className="save-button">
                        <FontAwesomeIcon icon={faSave} /> Save
                      </button>
                      <button onClick={handleCancelEditProfile} className="cancel-button">
                        <FontAwesomeIcon icon={faTimes} /> Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="profile-details">
                    <span className="profile-name">{profile.newName}</span>
                    <div className="actions">
                      <button onClick={() => handleEditProfile(index)} className="edit-button">
                        <FontAwesomeIcon icon={faPencilAlt} /> Edit
                      </button>
                      <button onClick={() => handleDeleteProfile(index)} className="delete-button">
                        <FontAwesomeIcon icon={faTrashAlt} /> Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link to="/addprofile" className="add-profile-button">
              <div className="profile-icon plus-icon">
                <FontAwesomeIcon className="ms-2" icon={faPlus} />
              </div>
              <span>Add Profile</span>
            </Link>
          </div>
        </div>

        <div className="account-links">
          <h2>Account Options</h2>
          <Link className="account-link-item" to="/Plan">
            Subscription Plan
          </Link>
          <Link className="account-link-item" to="/History">
            History
          </Link>
          <Link className="account-link-item" to="/AccountSettings">
            Account Settings
          </Link>
          <Link className="account-link-item" to="/DownloadPage">
            Download
          </Link>
          <Link className="account-link-item sign-out" to="/SignOut" onClick={handleSignOutUser}>
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
