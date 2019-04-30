import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

import Render from './page.render';
import MethodMixin from './page.method';

import { showSampleMessage, hideSampleMessage } from '../../Redux/actions/sampleAction';

const Home = MethodMixin(Render);

function mapStateToProps(state) {
    return {
        sample: state.sample,
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
)(withRouter(Home));
