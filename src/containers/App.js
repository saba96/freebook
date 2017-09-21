import {connect} from 'react-redux';
import App from '../components/App';
import {findByISBN, addBook } from '../actions/App'


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
        findByISBN: (ISBN) => {dispatch(findByISBN(ISBN))},
        addBook: (newBook) => {dispatch(addBook(newBook))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
