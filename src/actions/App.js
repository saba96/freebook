export const onFindBook = () => {
  return {
    type: 'ON_FIND_BOOK'
  }
}

export const findByISBN = (ISBN) => {
  return {
    type: 'FIND_BY_ISBN',
    ISBN
  }
}

