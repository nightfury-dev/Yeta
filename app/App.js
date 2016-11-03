import React from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';

import { showAddPlayerDialog } from './actions/actionCreators';
import MenuScreen from './containers/MenuScreen';
import PlayersScreen from './containers/PlayersScreen';
import CoursesScreen from './containers/CoursesScreen';
import InitGameScreen from './containers/InitGameScreen';
import ResumeGameScreen from './containers/ResumeGameScreen';
import GameScreen from './containers/GameScreen';
import AddCourseScreen from './containers/AddCourseScreen';
import ScorecardScreen from './containers/ScorecardScreen';


function Navigation(props) {
    return (<Router>
      <Scene key={'root'}>
        <Scene key={'menu'} component={MenuScreen} initial />
        <Scene
          key={'players'}
          component={PlayersScreen}
          rightTitle={'Add player'}
          onRight={() => props.showAddPlayerDialog()}
        />
        <Scene key={'initgame'} component={InitGameScreen} />
        <Scene key={'resumegame'} component={ResumeGameScreen} />
        <Scene key={'game'} component={GameScreen} />
        <Scene key={'courses'} component={CoursesScreen} />
        <Scene key={'addcourse'} component={AddCourseScreen} />
        <Scene key={'scorecard'} component={ScorecardScreen} />
      </Scene>
    </Router>);
}

Navigation.propTypes = {
    showAddPlayerDialog: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    addPlayerDialogVisible: state.UI.showAddPlayerDialog
});

const mapDispatchToProps = (dispatch) => ({
    showAddPlayerDialog: bindActionCreators(showAddPlayerDialog, dispatch)
});

const App = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default App;
