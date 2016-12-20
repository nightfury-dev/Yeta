import React from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';

import { showAddPlayerDialog } from './actions/actionCreators';
import Menu from './menu';
import Players from './players';
import Courses from './courses';
import InitGame from './create-game';
import ResumeGame from './resume-game';
import Game from './game';
import AddCourse from './course-form';
import Scorecard from './scorecard';


function Navigation(props) {
    return (<Router>
      <Scene key={'root'}>
        <Scene key={'menu'} component={Menu} initial />
        <Scene
          key={'players'}
          component={Players}
          rightTitle={'Add player'}
          onRight={() => props.showAddPlayerDialog()}
        />
        <Scene key={'initgame'} component={InitGame} />
        <Scene key={'resumegame'} component={ResumeGame} />
        <Scene key={'game'} component={Game} />
        <Scene key={'courses'} component={Courses} />
        <Scene key={'addcourse'} component={AddCourse} />
        <Scene key={'scorecard'} component={Scorecard} />
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
