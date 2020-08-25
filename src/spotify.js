export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectURI = 'http://localhost:3000/';

const clientId = process.env.REACT_APP_CLIENTID;

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
  'playlist-read-private',
  'playlist-read-collaborative'
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      const parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
