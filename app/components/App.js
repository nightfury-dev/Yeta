import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Test from './Test';


function mapStateToProps(state) {
    return {
        players: state.players,
        courses: state.courses,
        games: state.games
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Test);

export default App;
