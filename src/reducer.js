var _ = require('lodash');

const records = {
  1 :{
    ISBN: 1,
    name: 'The Goldfinch',
    latitude: 35.691566,
    longitude: 139.687922,
    category: 'Novel'
  },
  2 :{
    ISBN: 2,
    name: 'Hamilton: The Revolution',
    latitude: 35.688795,
    longitude: 139.682686,
    category: 'Art'
  },
  3: {
    ISBN: 3,
    name: 'Hue 1968',
    latitude: 35.701126,
    longitude: 139.709616,
    category:'History'
  },
  4 :{
    ISBN: 4,
    name: 'P.S. from Paris',
    latitude: 35.697711,
    longitude: 139.661980,
    category: 'Romance'
  },
  5:{
    ISBN: 5,
    name: 'Deep Learning',
    latitude: 35.736829,
    longitude: 139.196777,
    category: 'Technology'
  },
  6:{
    ISBN: 6,
    name: 'Orthopedic Physical Assessment',
    latitude: 35.531458,
    longitude: 138.911133,
    category: 'Medicine'
  },
  7 :{
    ISBN: 1,
    name: 'The Goldfinch',
    latitude: 36.691566,
    longitude: 139.887922,
    category: 'Novel'
  },
}

const initialState = {
  view: 'find',
  ISBN: "",
  records: records,
  foundBooks: null,
  bookInfo : null,
  findFieldText: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
    case 'CHANGE_VIEW_TO_ADD':
			return Object.assign({}, state,{ view: 'add' });
		case 'CHANGE_VIEW_TO_FIND':
			return Object.assign({}, state,{ view: 'find' });
		case 'FIND_BY_ISBN':
			return findByISBN(state, action);
		case 'ADD_NEW_BOOK':
			return addNewBook(state, action);
    case 'SET_FIND_FIELD_TEXT':
      return Object.assign({}, state, { findFieldText: action.text });
		case 'ON_ABOUT_US':
			return Object.assign({}, state, {view : 'aboutUs'})
		default:
			return state;
	}
};


const findByISBN = (state, action) => {
  let foundBooks = _.filter(state.records, (record) => {
    return record.ISBN.toString() === state.findFieldText;
  });
  let newState = Object.assign({}, state, { foundBooks });
  return newState;
}

const addNewBook = (state, action) => {
	let newState = Object.assign({}, state, {view : "SuccessfullAdd"});
	newState.records[action.newBook.ISBN] = action.newBook;
	return newState;
}

export default reducer;

