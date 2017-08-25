var _ = require('lodash');

const records = [
  {
    ISBN: 123,
    name: 'Jimmy Goes to the Store',
    latitude: 35.691566,
    longitude: 139.687922,
    category: 'Drama',
    author: 'Jimmy Chen'
  },
  {
    ISBN: 123,
    name: 'Jimmy Goes to the Store',
    latitude: 35.691633,
    longitude: 138.687922,
    category: 'Drama',
    author: 'Jimmy Chen'
  },
  {
    ISBN: 123,
    name: 'Jimmy Goes to the Store',
    latitude: 36.691566,
    longitude: 138.687922,
    category: 'Drama',
    author: 'Jimmy Chen'
  },
  {
    ISBN: 123,
    name: 'Jimmy Goes to the Store',
    latitude: 41.691566,
    longitude: 141.687922,
    category: 'Drama',
    author: 'Jimmy Chen'
  },
  {
    ISBN: 123,
    name: 'Jimmy Goes to the Store',
    latitude: 9.691566,
    longitude: 152.687922,
    category: 'Drama',
    author: 'Jimmy Chen'
  },
  {
    ISBN: 1,
    name: 'The Goldfinch',
    latitude: 35.691566,
    longitude: 139.687922,
    category: 'Novel',
    author: 'Donna Tartt'
  },
  {
    ISBN: 2,
    name: 'Hamilton: The Revolution',
    latitude: 35.688795,
    longitude: 139.682686,
    category: 'Art',
    author: 'Jeremy McCarter'
  },
  {
    ISBN: 3,
    name: 'Hue 1968',
    latitude: 35.701126,
    longitude: 139.709616,
    category:'History',
    author: 'Mark Bowden'
  },
  {
    ISBN: 4,
    name: 'P.S. from Paris',
    latitude: 35.697711,
    longitude: 139.661980,
    category: 'Romance',
    author: 'Marc Levy'
  },
  {
    ISBN: 5,
    name: 'Deep Learning',
    latitude: 35.736829,
    longitude: 139.196777,
    category: 'Technology',
    author: 'Ian Goodfellow'
  },
  {
    ISBN: 6,
    name: 'Orthopedic Physical Assessment',
    latitude: 35.531458,
    longitude: 138.911133,
    category: 'Medicine',
    author: 'David J Magee'
  },
  {
    ISBN: 1,
    name: 'The Goldfinch',
    latitude: 36.691566,
    longitude: 139.887922,
    category: 'Novel',
    author: 'Donna Tartt'
  },
];

const initialState = {
  view: 'find',
  ISBN: "",
  records: records,
  foundBooks: null,
  bookInfo: null,
  finderView: 'isbn',
  findFieldText: '',
  searchRadius: 100, // Radius is in Km
  locSearchLatFieldText: undefined,
  locationSearchLongitudeFieldText: undefined,
  userLocation: {
    lat: 0.0,
    lng: 0.0
  },
  adderTitleFieldText: '',
  adderISBNFieldText: '',
  adderGenreFieldText: '',
  adderLatFieldText: '',
  adderLngFieldText: '',
  searchTitle: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_VIEW_TO_ADD':
      return Object.assign({}, state,{ view: 'add' });
    case 'CHANGE_VIEW_TO_FIND':
      return Object.assign({}, state,{ view: 'find' });
    case 'FIND_BY_ISBN':
      return findByISBN(state, action);
    case 'FIND_BY_LOCATION':
      return findByLocation(state, action);
    case 'FIND_BY_TITLE':
      return findByTitle(state, action);
    case 'ADD_NEW_BOOK':
      return addNewBook(state, action);
    case 'SET_FIND_FIELD_TEXT':
      return Object.assign({}, state, { findFieldText: action.text });
    case 'SET_USER_LOCATION':
      let newState = Object.assign({}, state, {
        userLocation: action.location,
        locSearchLatFieldText: state.locSearchLatFieldText === undefined ? action.location.lat : state.locSearchLatFieldText,
        locationSearchLongitudeFieldText: state.locationSearchLongitudeFieldText === undefined ? action.location.lng : state.locationSearchLongitudeFieldText
      });
      return newState;
    case 'SET_ADDER_TITLE_FIELD_TEXT':
      return Object.assign({}, state, { adderTitleFieldText: action.text });
    case 'SET_ADDER_ISBN_FIELD_TEXT':
      return Object.assign({}, state, { adderISBNFieldText: action.text });
    case 'SET_ADDER_GENRE_FIELD_TEXT':
      return Object.assign({}, state, { adderGenreFieldText: action.text });
    case 'SET_ADDER_LAT_FIELD_TEXT':
      return Object.assign({}, state, { adderLatFieldText: action.text });
    case 'SET_ADDER_LNG_FIELD_TEXT':
      return Object.assign({}, state, { adderLngFieldText: action.text });
    case 'SET_LOCATION_SEARCH_LATITUDE_FIELD_TEXT':
      return Object.assign({}, state, { locSearchLatFieldText: action.text });
    case 'SET_LOCATION_SEARCH_LONGITUDE_FIELD_TEXT':
      return Object.assign({}, state, { locationSearchLongitudeFieldText: action.text });
    case 'SET_RADIUS_FIELD_TEXT':
      return Object.assign({}, state, { searchRadius: action.text });
    case 'SET_FINDER_TITLE_FIELD_TEXT':
      return Object.assign({}, state, { searchTitle: action.text });
    case 'ON_ABOUT_US':
      return Object.assign({}, state, { view : 'aboutUs' });
    default:
      console.log('UNKNOWN ACTION!');
      return state;
  }
};

const findByTitle = (state, action) => {
  let foundBooks = _.filter(state.records, (record) => {
    return record.name === state.searchTitle;
  });
  let newState = Object.assign({}, state, { foundBooks });
  return newState;
}

const findByLocation = (state, action) => {
  const KILOMETERS_PER_DEGREE = 111;
  let foundBooks = _.filter(state.records, (record) => {
    let dX = state.locSearchLatFieldText - record.latitude;
    let dY = state.locationSearchLongitudeFieldText - record.longitude;
    let distance = Math.sqrt(dX*dX + dY*dY);
    return distance <= state.searchRadius;
  });
  let newState = Object.assign({}, state, { foundBooks });
  return newState
}

const findByISBN = (state, action) => {
  let foundBooks = _.filter(state.records, (record) => {
    return record.ISBN.toString() === state.findFieldText;
  });
  let newState = Object.assign({}, state, { foundBooks });
  return newState;
}

const addNewBook = (state, action) => {
  let newState = Object.assign({}, state);
  newState.records.push({
    ISBN: state.adderISBNFieldText,
    name: state.adderTitleFieldText,
    category: state.adderGenreFieldText,
    latitude: Number.parseFloat(state.adderLatFieldText),
    longitude: Number.parseFloat(state.adderLngFieldText)
  })
  return newState;
}

export default reducer;

