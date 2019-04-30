import { SetBy, SetMessage } from './type/sampleType'

export function setMessage () {
    return {
        type: SetMessage
    }
}

export function setBy () {
    return {
        type: SetBy
    }
}