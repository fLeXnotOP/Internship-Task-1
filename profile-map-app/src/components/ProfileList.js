// ProfileList.js
import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileList = ({ profiles, loading }) => {
  if (loading) {
    return <Typography variant="body2" color="textSecondary">Loading...</Typography>;
  }

  if (!profiles || profiles.length === 0) {
    return <Typography variant="body2" color="textSecondary">No profiles found</Typography>;
  }

  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;