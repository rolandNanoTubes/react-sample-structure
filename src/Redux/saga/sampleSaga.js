import { put, takeEvery, call } from 'redux-saga/effects';
import {
    ShowSampleMessageSaga,
    HideSampleMessageSaga,
    ShowSampleMessage,
    HideSampleMessage,
} from '../actions/type/sampleType';

export function* sampleMessageShowHandle() {
    let response = {};
    try {
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
        console.log('fetching random user, will take time before showing the extra text');
        const fetchResponse = yield call(fetch, 'https://randomuser.me/api/');
        response = yield fetchResponse.json();
    } catch (err) {
        console.log(err);
        return; // prevent moving forward to setting Data
    }
    yield setData(response);
}

function* setData({ results }) {
    const { name } = results[0];
    const fullName = `${name.title} ${name.first} ${name.last}`;
    yield put({ type: ShowSampleMessage, fullName });
}

function* sampleMessageHideHandle() {
    try {
        yield put({ type: HideSampleMessage });

    } catch (err){
        console.log(err);
    }
}

export default function* watchMessageStateChange() {
    yield takeEvery(ShowSampleMessageSaga, sampleMessageShowHandle);
    yield takeEvery(HideSampleMessageSaga, sampleMessageHideHandle);
}
