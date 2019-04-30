import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

import Render from './page.render';
import MethodMixin from './page.method';


const Home = MethodMixin(Render);

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {},
        dispatch,
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(Home));
