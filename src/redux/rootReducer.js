import {combineReducers} from "redux";
import {BLOCK_BTN, CHANGE_THEME, DECREMENT, INCREMENT, UNBLOCK_BTN} from './types'

function counterReducer(state = 42, action) {
    if (action.type === INCREMENT) {
        return state + 1
    } else if (action.type === DECREMENT) {
        return state - 1
    }

    return state
}

const initThemeState = {
    value: 'light',
    block: false
}

function themeReducer(state = initThemeState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return {...state, value: action.payload}
        case BLOCK_BTN:
            return {...state, block: true}
        case UNBLOCK_BTN:
            return {...state, block: false}

        default:
            return state
    }
}
export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
})