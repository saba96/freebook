export const setAdderTitleFieldText = (text) => {
  return {
    type: 'SET_ADDER_TITLE_FIELD_TEXT',
    text
  }
}

export const setAdderISBNFieldText = (text) => {
  return {
    type: 'SET_ADDER_ISBN_FIELD_TEXT',
    text
  }
}

export const setAdderGenreFieldText = (text) => {
  return {
    type: 'SET_ADDER_GENRE_FIELD_TEXT',
    text
  }
}

export const setAdderLatFieldText = (text) => {
  return {
    type: 'SET_ADDER_LAT_FIELD_TEXT',
    text
  }
}

export const setAdderLngFieldText = (text) => {
  return {
    type: 'SET_ADDER_LNG_FIELD_TEXT',
    text
  }
}

export const addBook = () => {
  return {
    type: 'ADD_NEW_BOOK',
  }
}

