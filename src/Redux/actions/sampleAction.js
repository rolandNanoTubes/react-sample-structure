import { ShowSampleMessage, SetMessage, HideSampleMessage } from './type/sampleType'

export function setMessage (message) {
    return {
        type: SetMessage,
        message
    }
}

export function showSampleMessage () {
    return {
        type: ShowSampleMessage,
    }
}

export function hideSampleMessage () {
    return {
        type: HideSampleMessage,
    }
}