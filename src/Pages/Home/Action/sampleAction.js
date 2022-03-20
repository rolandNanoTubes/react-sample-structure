import { ShowSampleMessageSaga, HideSampleMessageSaga, SetMessage } from './type/sampleType'

export function setMessage (message) {
    return {
        type: SetMessage,
        message
    }
}

export function showSampleMessage () {
    return {
        type: ShowSampleMessageSaga,
    }
}

export function hideSampleMessage () {
    return {
        type: HideSampleMessageSaga,
    }
}