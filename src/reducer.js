var _ = require('lodash');

const records = [
  {
    ISBN: 123,
    title: 'Jimmy Goes to the Store',
    latitude: 35.691566,
    longitude: 139.687922,
    category: 'Drama',
    author: 'Jimmy Chen'
  },
  {
    ISBN: 123,
    title: 'Jimmy Goes to the Store',
    latitude: 35.691633,
    longitude: 138.687922,
    category: 'Drama',
    author: 'Jimmy Chen'
  },
  {
    ISBN: 123,
    title: 'Jimmy Goes to the Store',
    latitude: 36.691566,
    longitude: 138.687922,
    category: 'Drama',
    author: 'Jimmy Chen'
  },
  {
    ISBN: 123,
    title: 'Jimmy Goes to the Store',
    latitude: 41.691566,
    longitude: 141.687922,
    category: 'Drama',
    author: 'Jimmy Chen'
  },
  {
    ISBN: 123,
    title: 'Jimmy Goes to the Store',
    latitude: 9.691566,
    longitude: 152.687922,
    category: 'Drama',
    author: 'Jimmy Chen'
  },
  {
    ISBN: 1,
    title: 'The Goldfinch',
    latitude: 35.691566,
    longitude: 139.687922,
    category: 'Novel',
    author: 'Donna Tartt'
  },
  {
    ISBN: 2,
    title: 'Hamilton: The Revolution',
    latitude: 35.688795,
    longitude: 139.682686,
    category: 'Art',
    author: 'Jeremy McCarter'
  },
  {
    ISBN: 3,
    title: 'Hue 1968',
    latitude: 35.701126,
    longitude: 139.709616,
    category:'History',
    author: 'Mark Bowden'
  },
  {
    ISBN: 4,
    title: 'P.S. from Paris',
    latitude: 35.697711,
    longitude: 139.661980,
    category: 'Romance',
    author: 'Marc Levy'
  },
  {
    ISBN: 5,
    title: 'Deep Learning',
    latitude: 35.736829,
    longitude: 139.196777,
    category: 'Technology',
    author: 'Ian Goodfellow'
  },
  {
    ISBN: 6,
    title: 'Orthopedic Physical Assessment',
    latitude: 35.531458,
    longitude: 138.911133,
    category: 'Medicine',
    author: 'David J Magee'
  },
  {
    ISBN: 1,
    title: 'The Goldfinch',
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
  locationSearchLatitudeFieldText: undefined,
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
  searchTitle: '',
  searchAuthor: ''
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
    case 'FIND_BY_AUTHOR':
      return findByAuthor(state, action);
    case 'ADD_NEW_BOOK':
      return addNewBook(state, action);
    case 'SET_FIND_FIELD_TEXT':
      return Object.assign({}, state, { findFieldText: action.text });
    case 'SET_USER_LOCATION': {
      let newState = Object.assign({}, state, {
        userLocation: action.location,
        locationSearchLatitudeFieldText: state.locationSearchLatitudeFieldText === undefined ? action.location.lat : state.locationSearchLatitudeFieldText,
        locationSearchLongitudeFieldText: state.locationSearchLongitudeFieldText === undefined ? action.location.lng : state.locationSearchLongitudeFieldText
      });
      return newState; }
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
    case 'SET_LOCATION_SEARCH_LATITUDE_FIELD_TEXT': {
      let newState = Object.assign({}, state);
      newState.locationSearchLatitudeFieldText = action.text;
      return newState; }
    case 'SET_LOCATION_SEARCH_LONGITUDE_FIELD_TEXT':
      return Object.assign({}, state, { locationSearchLongitudeFieldText: action.text });
    case 'SET_RADIUS_FIELD_TEXT':
      return Object.assign({}, state, { searchRadius: action.text });
    case 'SET_FINDER_TITLE_FIELD_TEXT':
      return Object.assign({}, state, { searchTitle: action.text });
    case 'SET_FINDER_AUTHOR_FIELD_TEXT':
      return Object.assign({}, state, { searchAuthor: action.text });
    case 'ON_ABOUT_US':
      return Object.assign({}, state, { view : 'aboutUs' });
    default:
      console.log('UNKNOWN ACTION!');
      return state;
  }
};

const findByAuthor = (state, action) => {
  let foundBooks = _.filter(state.records, (record) => {
    return record.author === state.searchAuthor;
  });
  const center = {
    latitude: state.locationSearchLatitudeFieldText,
    longitude: state.locationSearchLongitudeFieldText
  }
  foundBooks = sortByDistance(center, foundBooks);
  let newState = Object.assign({}, state, { foundBooks });
  return newState;
}

const findByTitle = (state, action) => {
  let foundBooks = _.filter(state.records, (record) => {
    return record.title === state.searchTitle;
  });
  const center = {
    latitude: state.locationSearchLatitudeFieldText,
    longitude: state.locationSearchLongitudeFieldText
  }
  foundBooks = sortByDistance(center, foundBooks);
  let newState = Object.assign({}, state, { foundBooks });
  return newState;
}

const findByLocation = (state, action) => {
  const KILOMETERS_PER_DEGREE = 111;
  const center = {
    latitude: state.locationSearchLatitudeFieldText,
    longitude: state.locationSearchLongitudeFieldText
  }
  let foundBooks = _.filter(state.records, (record) => {
    let dX = center.latitude - record.latitude;
    let dY = center.longitude - record.longitude;
    let distance = Math.sqrt(dX*dX + dY*dY);
    distance *= KILOMETERS_PER_DEGREE; // convert to km
    return distance <= state.searchRadius;
  });
  foundBooks = sortByDistance(center, foundBooks);
  let newState = Object.assign({}, state, { foundBooks });
  return newState
}

const findByISBN = (state, action) => {
  let foundBooks = _.filter(state.records, (record) => {
    return record.ISBN.toString() === state.findFieldText;
  });
  const center = {
    latitude: state.locationSearchLatitudeFieldText,
    longitude: state.locationSearchLongitudeFieldText
  }
  foundBooks = sortByDistance(center, foundBooks);
  let newState = Object.assign({}, state, { foundBooks });
  return newState;
}

const addNewBook = (state, action) => {
  let newState = Object.assign({}, state);
  newState.records.push({
    ISBN: state.adderISBNFieldText,
    title: state.adderTitleFieldText,
    category: state.adderGenreFieldText,
    latitude: Number.parseFloat(state.adderLatFieldText),
    longitude: Number.parseFloat(state.adderLngFieldText)
  })
  return newState;
}

const sortByDistance = (center, records) => {
  const KILOMETERS_PER_DEGREE = 111;
  return _.sortBy(records, [ (record) => {
    let dX = center.latitude - record.latitude;
    let dY = center.longitude - record.longitude;
    let distance = Math.sqrt(dX*dX + dY*dY);
    record['distance'] = (distance * KILOMETERS_PER_DEGREE).toFixed(1);
    return distance;
  } ]);
}

export default reducer;

