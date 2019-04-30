import { SetMessage, ShowSampleMessage, HideSampleMessage } from '../actions/type/sampleType';

const initialSampleState = {
    isShowSampleMessage: false,
    message: 'Showing sample text',
};

export default function sample(state = initialSampleState, action) {
    switch (action.type) {
        case SetMessage:
            return Object.assign({}, state, { message: action.message });
        case ShowSampleMessage:
            return Object.assign({}, state, { isShowSampleMessage: true });
        case HideSampleMessage:
            return Object.assign({}, state, { isShowSampleMessage: false });
        default:
            return state;
    }
}
