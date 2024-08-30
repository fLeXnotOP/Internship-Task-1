import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ErrorBoundary } from 'react-error-boundary';
import ProfileCard from './ProfileCard';
import MapComponent from './MapComponent';
import SummaryButton from './SummaryButton';
import AdminPanel from './AdminPanel';
import SearchBar from './SearchBar';

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/profiles');
        setProfiles(response.data);
      } catch (error) {
        setError(error);
        console.error('Error fetching profiles:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfiles();
  }, []);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <ErrorBoundary fallbackRender={({ error }) => <p>Error: {error.message}</p>}>
      <div className="app">
        <h1>Profile Map App</h1>
        <SearchBar profiles={profiles} setSearchResults={handleSearch} />
        {loading ? (
          <p>Loading...</p>
        ) : (
          searchResults.length > 0 ? (
            <ul>
              {searchResults.map((profile) => (
                <li key={profile.id}>
                  <ProfileCard profile={profile} />
                  <MapComponent address={profile.address} />
                  <SummaryButton profile={profile} />
                </li>
              ))}
            </ul>
          ) : (
            <p>No search results found.</p>
          )
        )}
        <AdminPanel />
        {error ? (
          <p>Error: {error.message}</p>
        ) : (
          <p>No profiles found.</p>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default App;
