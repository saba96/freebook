import {connect} from 'react-redux';
import App from '../components/App';
import {onFindBook, findByISBN} from '../actions/App'


const mapStateToProps = (state) => {
    return {
        view : state.view
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFindBook: () => dispatch(onFindBook()),
        findByISBN: (ISBN) => dispatch(findByISBN(ISBN))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);