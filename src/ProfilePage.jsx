import React, { useState } from 'react';
import './ProfilePage.css';
import Navbar from './Navbar';
import Footer from './Footer'

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    bio: ''
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically send the updated info to a server
    console.log('Saving user info:', userInfo);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <><Navbar/>
    <div className="profile-page">
      <div className="profile-container">
        <h1>User Profile</h1>
        <div className="profile-image">
          <img src="https://www.wwe.com/f/styles/talent_champion_lg/public/all/2024/04/Roman_PROFILE--a693aaf95d89f652dd64e3f5deb115e9.png" alt="Profile" />
        </div>
        <div className="profile-info">
          {isEditing ? (
            <>
              <input
                name="name"
                value={userInfo.name}
                onChange={handleChange}
                placeholder="Name"
              />
              <input
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <input
                name="phone"
                value={userInfo.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
              <input
                name="company"
                value={userInfo.company}
                onChange={handleChange}
                placeholder="Company"
              />
              <input
                name="position"
                value={userInfo.position}
                onChange={handleChange}
                placeholder="Position"
              />
              <textarea
                name="bio"
                value={userInfo.bio}
                onChange={handleChange}
                placeholder="Bio"
              />
            </>
          ) : (
            <>
              <h2>{userInfo.name}</h2>
              <p><strong>Email:</strong> {userInfo.email}</p>
              <p><strong>Phone:</strong> {userInfo.phone}</p>
              <p><strong>Company:</strong> {userInfo.company}</p>
              <p><strong>Position:</strong> {userInfo.position}</p>
              <p><strong>Bio:</strong> {userInfo.bio}</p>
            </>
          )}
        </div>
        <div className="profile-actions">
          {isEditing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={handleEdit}>Edit</button>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProfilePage;