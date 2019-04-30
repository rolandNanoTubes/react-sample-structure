import { put, takeEvery } from 'redux-saga/effects';
import { ShowSampleMessageSaga, HideSampleMessageSaga, ShowSampleMessage, HideSampleMessage } from '../actions/type/sampleType';

export function* sampleMessageShowHandle(payload) {
    console.log('Showing message');
    yield put({ type: ShowSampleMessage });
}

export function* sampleMessageHideHandle(payload) {
    console.log('Hiding message');
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
