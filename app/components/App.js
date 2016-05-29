import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Players from './Players';


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

const App = connect(mapStateToProps, mapDispatchToProps)(Players);

export default App;
