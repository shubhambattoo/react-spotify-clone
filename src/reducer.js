export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // token:
  //   'BQAK3grSA7yTvZ9FRIrf3hp-v9I5Hb7JK1oDV95kJ5H8ojrITUxN3ZVHRturStfvUxeRZcHKYggWkvOTXXOSlnZARDUhhPkOe3itY-KgvO8Z89W5wMn0vzx73n0AcPEDaRQb2HBW01YiC0LGnqPBC7o5b7NHfkkXYPBrFg',
};

export default function (state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_TOKEN':
      return { ...state, token: action.payload };
    case 'SET_PLAYLIST':
      return { ...state, playlists: action.payload };
    default:
      return state;
  }
}
