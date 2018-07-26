import { CLIENT_ID, CLIENT_SECRET } from './credentials';

const API = "https://api.foursquare.com/v2/venues";

const VERSION = '20180724'

const CATEGORIES = {
  hamburgueria: '4bf58dd8d48988d16c941735'
}

const queryParams = (params) => {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}

export const getVenues = (lat, lng) => {
  const categoryId = Object.keys(CATEGORIES).map((cat) => CATEGORIES[cat]);
  const params = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    v: VERSION,
    ll: `${lat},${lng}`,
    categoryId: `${categoryId}`,
    radius: 1000,
    limit: 50
  }

  const url = `${API}/search?${queryParams(params)}`

  return fetch(url)
    .then(res => res.json())
    .then(data => data.response.venues)
    .catch(error => console.error(error))
}
