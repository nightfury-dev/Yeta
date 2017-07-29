import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';

import Menu from '../menu';
import Players from '../players';
import Courses from '../courses';
import InitGame from '../create-game';
import ResumeGame from '../resume-game';
import Game from '../game';
import AddCourse from '../course-form';
import Scorecard from '../scorecard';


const Navigation = () => (
  <Router>
    <Scene key={'root'}>
      <Scene key={'menu'} component={Menu} initial />
      <Scene key={'players'} component={Players} />
      <Scene key={'initgame'} component={InitGame} />
      <Scene key={'resumegame'} component={ResumeGame} />
      <Scene
        key={'game'}
        component={Game}
        onRight={() => Actions.scorecard()}
        rightTitle="Scorecard"
      />
      <Scene key={'courses'} component={Courses} />
      <Scene key={'addcourse'} component={AddCourse} />
      <Scene key={'scorecard'} component={Scorecard} />
    </Scene>
  </Router>
);

export default Navigation;
