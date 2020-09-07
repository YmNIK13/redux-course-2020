import {BLOCK_BTN, CHANGE_THEME, DECREMENT, INCREMENT, UNBLOCK_BTN} from './types'

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
export function blockBtn() {
    return {
        type: BLOCK_BTN
    }
}
export function unblockBtn() {
    return {
        type: UNBLOCK_BTN
    }
}

export function asyncIncrement() {
    return function (dispatch) {
        dispatch(blockBtn())
        setTimeout(() => {
            dispatch(increment())
            dispatch(unblockBtn())
        }, 5000)
    }
}


export function changeTheme(newNameTheme) {
    return {
        type: CHANGE_THEME,
        payload: newNameTheme,
    }
}
