import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

import Render from './page.render';
import MethodMixin from './page.method';


const Todo = MethodMixin(Render);

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {},
        dispatch,
    );
}

function setAdditionalProps(stateProps, dispatchState, ownProps) {
    return {
        ...stateProps,
        ...dispatchState,
        ...ownProps,
        headerContent: 'Google',
        sectionId: 'google',
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    setAdditionalProps,
)(withRouter(Todo));
