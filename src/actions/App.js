export const aboutUs = () => {
  return {
    type: 'ON_ABOUT_US'
  }
}
export const findByISBN = (ISBN) => {
  return {
    type: 'FIND_BY_ISBN',
    ISBN
  }
}

export const addBook = (newBook) => {
  return{
    type : 'ADD_NEW_BOOK',
    newBook
  }
}

export const backHome = () => {
  return{
    type : "BACK_HOME"
  }
}
