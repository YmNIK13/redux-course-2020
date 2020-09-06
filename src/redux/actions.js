import {ASYNC_INCREMENT, DECREMENT, INCREMENT} from './types'


export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}


export function asyncIncrement() {
    return {
        type: ASYNC_INCREMENT
    }
}
