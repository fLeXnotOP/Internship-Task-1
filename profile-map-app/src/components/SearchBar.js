import React, { useState } from 'react';
import debounce from 'lodash.debounce';

const SearchBar = ({ profiles, setSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResultsState] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = debounce((e) => {
    const query = e.target.value.toLowerCase();
    setLoading(true);
    const results = profiles.filter((profile) => {
      const name = profile.name.toLowerCase();
      const description = profile.description.toLowerCase();
      return name.includes(query) || description.includes(query);
    });
    setSearchResultsState(results);
    setLoading(false);
  }, 500); // debounce for 500ms

  return (
    <div className="search-bar">
      <input
        type="search"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search profiles"
      />
      {loading ? (
        <Typography variant="body2" color="textSecondary">Loading...</Typography>
      ) : (
        setSearchResults(searchResults)
      )}
    </div>
  );
};

export default SearchBar;