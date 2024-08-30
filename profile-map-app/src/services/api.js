import axios from 'axios';

const API_KEY = 'AIzaSyDAD0CA-oeyRqyVwubH6PrhIVLAnDMfcJY'; 
const BASE_URL = 'https://maps.googleapis.com/maps/api/';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

export const getMapData = async (lat, lng) => {
  try {
    const response = await api.get('geocode/json', {
      params: {
        latlng: `${lat},${lng}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching map data:', error);
    throw new Error('Failed to fetch map data');
  }
};

export const getPlaceDetails = async (placeId) => {
  try {
    const response = await api.get('place/details/json', {
      params: {
        placeid: placeId,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching place details:', error);
    throw new Error(`Failed to fetch place details for place ID ${placeId}`);
  }
};