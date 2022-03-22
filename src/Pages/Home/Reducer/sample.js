import { SetMessage, ShowSampleMessage, HideSampleMessage } from '../Action/type/actionType';

const initialSampleState = {
    isShowSampleMessage: false,
    message: 'Showing sample text',
    fullName: ''
};

export default function sample(state = initialSampleState, action) {
    switch (action.type) {
        case SetMessage:
            return Object.assign({}, state, { message: action.message });
        case ShowSampleMessage:
            return Object.assign({}, state, { isShowSampleMessage: true, fullName: action.fullName });
        case HideSampleMessage:
            return Object.assign({}, state, { isShowSampleMessage: false });
        default:
            return state;
    }
}
