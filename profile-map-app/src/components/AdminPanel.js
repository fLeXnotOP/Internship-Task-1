import React, { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({});
  const [error, setError] = useState(null);

  const handleAddProfile = async () => {
    try {
      const response = await axios.post('/api/profiles', newProfile);
      setProfiles([...profiles, response.data]);
      setNewProfile({}); // reset new profile state
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEditProfile = async (profile) => {
    try {
      const response = await axios.put(`/api/profiles/${profile.id}`, profile);
      setProfiles(profiles.map((p) => (p.id === profile.id ? response.data : p)));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteProfile = async (profile) => {
    try {
      await axios.delete(`/api/profiles/${profile.id}`);
      setProfiles(profiles.filter((p) => p.id !== profile.id));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form>
        {/* ... */}
      </form>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {/* ... */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;