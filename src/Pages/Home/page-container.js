import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import './Style/page.style.scss';

import Render from './page.render';
import MethodMixin from './page.method';

import { showSampleMessage, hideSampleMessage } from './Action/page.action';

const Home = MethodMixin(Render);

function mapStateToProps(state) {
    return {
        sample: state.sample,
    };
}

function setAdditionalProps(stateProps, dispatchState, ownProps) {
    return {
        ...stateProps,
        ...dispatchState,
        ...ownProps,
        headerContent: 'Home',
        sectionId: 'home',
    };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            showSampleMessage,
            hideSampleMessage,
        },
        dispatch,
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    setAdditionalProps,
)(withRouter(Home));
