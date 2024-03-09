import React from 'react';
import avatarImage from '../../src/assets/Logo.svg'; // Import your avatar image

const MyAvatar = (props) => {
  return (
    <div style={{ width: '100px', height: '100px', overflow: 'hidden' }}>
      {/* Use an img tag to display the avatar image */}
      <img src={avatarImage} alt="Avatar" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default MyAvatar;
