export const API_KEY = 'AIzaSyDAD0CA-oeyRqyVwubH6PrhIVLAnDMfcJY';
export const BASE_URL = 'https://maps.googleapis.com/maps/api';

export function getApiUrl(endpoint) {
  if (!API_KEY) {
    throw new Error('API_KEY is not set');
  }
  if (!endpoint) {
    throw new Error('Endpoint is required');
  }
  return `${BASE_URL}/${endpoint}?key=${API_KEY}`;
}