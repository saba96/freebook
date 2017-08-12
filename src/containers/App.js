import {connect} from 'react-redux';
import App from '../components/App';
import {onFindBook, onAddBook, findByISBN, addBook, backHome, aboutUs} from '../actions/App'


const mapStateToProps = (state) => {
    return {
        view : state.view,
        ISBN : state.ISBN,
        bookInfo : state.bookInfo,
        records : state.records
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFindBook: () => dispatch(onFindBook()),
        onAddBook: () => dispatch(onAddBook()),
        findByISBN: (ISBN) => {dispatch(findByISBN(ISBN))},
        addBook: (newBook) => {dispatch(addBook(newBook))},
        backHome: () => {dispatch(backHome())},
        aboutUs: () => {dispatch(aboutUs())}
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);