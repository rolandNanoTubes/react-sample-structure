import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

import { getAnimalAdaptData } from './Action/facebook.action';
import NewsComponent from '../../Components/NewsComponent/NewsComponent';
import MethodMixin from './page.method';
import './Style/page.style.scss'


const About = MethodMixin(NewsComponent);

function mapStateToProps() {
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
        getAnimalAdaptData,
        headerContent: 'Facebook',
        sectionId: 'facebook',
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    setAdditionalProps,
)(withRouter(About));
