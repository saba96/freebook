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

