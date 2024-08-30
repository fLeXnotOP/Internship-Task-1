import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const DEFAULT_CENTER = { lat: 37.7749, lng: -122.4194 };
const DEFAULT_ZOOM = 12;
const DEFAULT_MAP_TYPE_ID = 'roadmap';

const useMapService = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-maps-script',
    googleMapsApiKey: 'AIzaSyDAD0CA-oeyRqyVwubH6PrhIVLAnDMfcJY',
  });

  if (!isLoaded) {
    return null;
  }

  const initMap = (map, lat, lng) => {
    const center = new google.maps.LatLng(lat, lng);
    map.setCenter(center);
    map.setZoom(DEFAULT_ZOOM);
  };

  const addMarker = (map, lat, lng) => {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      map,
    });
    return marker;
  };

  const getMapOptions = () => {
    return {
      center: DEFAULT_CENTER,
      zoom: DEFAULT_ZOOM,
      mapTypeId: DEFAULT_MAP_TYPE_ID,
    };
  };

  return { initMap, addMarker, getMapOptions };
};

export default useMapService;