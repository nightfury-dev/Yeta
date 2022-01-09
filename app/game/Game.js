import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import ScoreInputContainer from './ScoreInputContainer';
import Screen from '../shared/components/Screen';
import HoleInfo from './HoleInfo';
import GamesActions from '../redux/GamesRedux';
import CoursesActions from '../redux/CoursesRedux';


class Game extends React.Component {
  constructor(props) {
    super(props);

    this.changeHole = this.changeHole.bind(this);
    this.increasePar = this.increasePar.bind(this);
    this.decreasePar = this.decreasePar.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.getCurrentPar = this.getCurrentPar.bind(this);
  }

  getCurrentPar() {
    const { game } = this.props;

    const par = _.find(
      game.course.holes,
      (h) => h.holenumber === game.currentHole
    ).par;

    return par;
  }

  changeHole(newHole) {
    const game = this.props.game;
    if (newHole > 0 && newHole <= game.course.holes.length) {
      this.props.updateHole(game.id, newHole);
    }
  }

  increasePar() {
    this.updatePar(this.getCurrentPar() + 1);
  }

  decreasePar() {
    this.updatePar(this.getCurrentPar() - 1);
  }

  updateNote(note) {
    const { game } = this.props;

    const hole = _.find(
      game.course.holes,
      (h) => h.holenumber === game.currentHole
    );

    this.props.updateNote(game.course, hole, note);
  }

  updatePar(newPar) {
    const { game } = this.props;
    const pars = _.values(game.course.holes).map((hole) => hole.par);
    const index = game.currentHole - 1;

    const newPars = [
      ...pars.slice(0, index),
      newPar,
      ...pars.slice(index + 1)
    ];

    this.props.updateCourse(game.course, game.course.name, newPars);
  }


  render() {
    if (this.props.creating) {
      // TODO: show a loader
      return null;
    }

    const hole = _.find(
      this.props.game.course.holes,
      (h) => h.holenumber === this.props.game.currentHole
    );

    const currentHole = this.props.game.currentHole;

    return (
      <Screen>
        <HoleInfo
          hole={hole}
          totalHoleCount={this.props.game.course.holes.length}
          onParIncreased={this.increasePar}
          onParDecreased={this.decreasePar}
          onNoteUpdated={this.updateNote}
        />
        <View style={{ flex: 11 }}>
          <ScoreInputContainer
            game={this.props.game}
            nextHole={() => this.changeHole(currentHole + 1)}
            previousHole={() => this.changeHole(currentHole - 1)}
          />
        </View>
      </Screen>
    );
  }
}

Game.propTypes = {
  game: PropTypes.object,
  updateHole: PropTypes.func.isRequired,
  creating: PropTypes.bool.isRequired,
  updateCourse: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  game: state.games.current,
  creating: state.games.creating
});

const mapDispatchToProps = (dispatch) => ({
  updateHole: (gameId, newHole) =>
    dispatch(GamesActions.updateHole(gameId, newHole)),
  updateCourse: (course, name, pars) =>
    dispatch(CoursesActions.updateCourse(course, name, pars)),
  updateNote: (course, hole, note) =>
    dispatch(CoursesActions.updateNote(course, hole, note))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
