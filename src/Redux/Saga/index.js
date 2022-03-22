import sample from './sampleSaga';
import { all } from 'redux-saga/effects';

export function* logMessage() {
    yield console.log('saga ready!')
}

export default function* rootSaga() {
    yield all([
        sample(),
        logMessage()
    ])
}