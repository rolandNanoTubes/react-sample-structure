import { SetMessage, SetBy } from '../actions/type/sampleType';

const initialSampleState = {
    by: 'lando',
    message: 'sample',
};

export function sample(state = initialSampleState, action) {
    switch (action.type) {
        case SetMessage:
            return Object.assign({}, state, { message: action.message });
        case SetBy:
            return Object.assign({}, state, { by: action.name });
        default:
            return state;
    }
}
