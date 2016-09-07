import React from 'react';

import ScoregridViewElement from './ScoregridViewElement';
import ScoregridEditElement from './ScoregridEditElement';


class ScoreGridElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: false };

        this.showDefaultView = this.showDefaultView.bind(this);
        this.showEditView = this.showEditView.bind(this);
    }

    showEditView() {
        this.setState({ edit: true });
    }

    showDefaultView() {
        this.setState({ edit: false });
    }

    render() {
        const newState = this.state.edit ? 'edit' : 'view';
        const component = this.state.edit ?
            (<ScoregridEditElement
              {...this.props}
              afterEdit={this.showDefaultView}
            />) :
            (<ScoregridViewElement
              {...this.props}
              longPress={this.showEditView}
            />);
        this.props.stateChanged(newState);
        return component;
    }
}

ScoreGridElement.propTypes = {
    stateChanged: React.PropTypes.func.isRequired
};

export default ScoreGridElement;
