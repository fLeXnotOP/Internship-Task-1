// MapComponent.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = ({ address }) => {
  const [map, setMap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    LoadScript({
      googleMapsApiKey: 'AIzaSyDAD0CA-oeyRqyVwubH6PrhIVLAnDMfcJY',
      onLoad: () => {
        setLoading(false);
      },
      onError: (error) => {
        setError(error);
        setLoading(false);
      },
    });
  }, []);

  const handleMapLoad = (map) => {
    setMap(map);
  };

  if (loading) {
    return <Typography variant="body2" color="textSecondary">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="body2" color="error">Error loading map: {error.message}</Typography>;
  }

  const defaultCenter = { lat: 37.7749, lng: -122.4194 };
  const defaultZoom = 12;

  return (
    <GoogleMap
      center={address ? { lat: address.latitude, lng: address.longitude } : defaultCenter}
      zoom={address ? 12 : defaultZoom}
      onLoad={handleMapLoad}
    >
      {address && (
        <Marker position={{ lat: address.latitude, lng: address.longitude }} />
      )}
    </GoogleMap>
  );
};

export default MapComponent;