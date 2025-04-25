import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import NavBar from './NavBar';
import './ProfilePage.scss';
import NavBar from './NavBar';

function ProfilePage() {
  const [profileCount, setProfileCount] = useState(() => {
    return parseInt(localStorage.getItem('profileCount'), 10) || 0;
  });

  const handleSignOut = () => {
    localStorage.clear();
  };

  const handleIconDelete = (index) => {
    if (profileCount > 0) {
      const updatedCount = profileCount - 1;
      setProfileCount(updatedCount);
      localStorage.setItem('profileCount', updatedCount.toString());
    }
  };

  const userIcons = Array.from({ length: profileCount });

  return (
    <div>
      <NavBar/>
      <div className="user-page">
      {/* <NavBar /> */}
      <div className="icon-circle">
        <h4><FontAwesomeIcon icon={faUser} /></h4>
        <h4 className="welcome-text">Welcome</h4>
        <div className="icon-row">
          {userIcons.map((_, index) => (
            <div
              key={index}
              className="icon user-created"
              onClick={() => handleIconDelete(index)}
            >
              <FontAwesomeIcon icon={faUser} />
            </div>
          ))}
          <div className="icon plus">
            <Link to="/AddProfile">
              <FontAwesomeIcon icon={faPlus} />
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <Link className="item" to="/EditProfile">Edit Profile</Link>
        <Link className="item" to="/PricingPlans">Subscription Plan</Link>
        <Link className="item" to="/History">History</Link>
        <Link className="item" to="/AccountSettings">Account Settings</Link>
        <Link className="item" to="/DownloadPage">Download</Link>
        <Link className="item" to="/SignOut" onClick={handleSignOut}>Sign Out</Link>
      </div>
    </div>
    </div>

  );
}

export default ProfilePage;
