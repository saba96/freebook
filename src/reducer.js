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
	}
}

const initialState = {
	view: 'Home',
	ISBN: null,
	records: records
};


const reducer = (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case 'ON_FIND_BOOK':
			return Object.assign({}, state,{ view: 'findBook' });
		case 'FIND_BY_ISBN':
			return Object.assign({}, state, {ISBN: action.ISBN});
		default:
			return state;
	}
};

export default reducer;