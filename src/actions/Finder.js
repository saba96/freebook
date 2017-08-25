export const findByTitle = () => {
  return {
    type: 'FIND_BY_TITLE'
  }
}

export const findByLocation = () => {
  return {
    type: 'FIND_BY_LOCATION'
  }
}

export const setLocationSearchLatitudeFieldText = (text) => {
  return {
    type: 'SET_LOCATION_SEARCH_LATITUDE_FIELD_TEXT',
    text
  }
}

export const setLocationSearchLongitudeFieldText = (text) => {
  return {
    type: 'SET_LOCATION_SEARCH_LONGITUDE_FIELD_TEXT',
    text
  }
}

export const findByAuthor = () => {
  return {
    type: 'FIND_BY_AUTHOR'
  }
}

export const findByISBN = () => {
  return {
    type: 'FIND_BY_ISBN'
  }
}

export const setFindFieldText = (text) => {
  return {
    type: 'SET_FIND_FIELD_TEXT',
    text
  }
}

export const setTitleFieldText = (text) => {
  return {
    type: 'SET_FINDER_TITLE_FIELD_TEXT',
    text
  }
}

export const setAuthorFieldText = (text) => {
  return {
    type: 'SET_FINDER_AUTHOR_FIELD_TEXT',
    text
  }
}

export const setRadiusFieldText = (text) => {
  return {
    type: 'SET_RADIUS_FIELD_TEXT',
    text
  }
}

