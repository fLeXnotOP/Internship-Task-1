import { getApiUrl } from './helpers';

const profileMapping = async () => {
  try {
    const endpoint = 'geocode/json';
    const apiUrl = getApiUrl(endpoint);
    const response = await fetch(apiUrl);
    const data = await response.json();

    const profileData = data.results[0].address_components.reduce((acc, component) => {
      const types = component.types;
      if (types.includes('locality')) {
        acc.city = component.long_name;
      } else if (types.includes('administrative_area_level_1')) {
        acc.state = component.short_name;
      } else if (types.includes('country')) {
        acc.country = component.long_name;
      }
      return acc;
    }, {});

    console.log(profileData);
  } catch (error) {
    console.error(error);
  }
};

profileMapping();
