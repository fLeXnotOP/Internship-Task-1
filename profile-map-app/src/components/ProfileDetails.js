import React from 'react';
import PropTypes from 'prop-types';

const ProfileDetails = ({ profile, onEdit, onDelete }) => {
  if (!profile) {
    return <div>No profile found</div>;
  }

  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <img src={profile.photo} alt={profile.name} />
      <button onClick={() => onEdit(profile)}>Edit</button>
      <button onClick={() => onDelete(profile)}>Delete</button>
    </div>
  );
};

ProfileDetails.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProfileDetails;