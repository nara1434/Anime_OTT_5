// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AddProfile.scss';

// const Profile = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSave = () => {
//     // Get the current count of profiles created from localStorage
//     const profileCount = parseInt(localStorage.getItem('profileCount'), 10) || 0;

//     // Increment the profile count
//     localStorage.setItem('profileCount', (profileCount + 1).toString());

//     // Save profile info to localStorage (or use any other storage option)
//     localStorage.setItem('profileCreated', 'true');
//     // alert('Profile saved!');
//     navigate('/ProfilePage'); // Navigate back to the Profile page after saving
//   };

//   return (
//     <div className="container">
//       <h1>Create Profile</h1>
//       <div className="form-group">
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter your name"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//         />
//       </div>
//       <button onClick={handleSave}>Save Profile</button>
//     </div>
//   );
// };

// export default Profile;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProfile.scss';

const animeAvatars = [
  { id: 1, name: 'Naruto', src: 'https://i.imgur.com/jT3fW7V.png' },
  { id: 2, name: 'Luffy', src: 'https://i.imgur.com/ZF6s192.png' },
  { id: 3, name: 'Sakura', src: 'https://i.imgur.com/KqR8LJo.png' },
  { id: 4, name: 'Goku', src: 'https://i.imgur.com/egXhnHK.png' }
];

const Profile = () => {
  const navigate = useNavigate();
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    const profileCount = parseInt(localStorage.getItem('profileCount'), 10) || 0;
    localStorage.setItem('profileCount', (profileCount + 1).toString());
    localStorage.setItem('profileCreated', 'true');
    localStorage.setItem(`profile_${profileCount}`, JSON.stringify({
      name,
      email,
      avatar: selectedAvatar
    }));
    navigate('/ProfilePage');
  };

  return (
    <div className="profile-container">
      <h1>Create Profile</h1>
      <div className="avatar-selection">
        {animeAvatars.map((avatar) => (
          <div
            key={avatar.id}
            className={`avatar-item ${selectedAvatar === avatar.src ? 'selected' : ''}`}
            onClick={() => setSelectedAvatar(avatar.src)}
          >
            <img src={avatar.src} alt={avatar.name} />
            <p>{avatar.name}</p>
          </div>
        ))}
      </div>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <button onClick={handleSave} disabled={!name || !email || !selectedAvatar}>
        Save Profile
      </button>
    </div>
  );
};

export default Profile;
